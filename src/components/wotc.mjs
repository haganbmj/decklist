import jsPDF from "jspdf";
import { parseDecklist } from "../helpers/ParseMagicDecklist.mjs";

export function render(input, config) {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'letter',
    });

    // FIXME: This is silly. Need a cleaner way to allow sideboard entries in both fields.
    // FIXME: This should also probably be where I handle merging entries of the same name?
    let { mainboard, sideboard } = parseDecklist(input.decklist, 'mainboard');
    let { sideboard: sideboard2 } = parseDecklist(input.sideboard, 'sideboard');
    sideboard = sideboard.concat(sideboard2);

    // TODO: Move these to some kind of helper function. Add an Enum.
    if (config.sorting === 'alphabetical') {
        mainboard = mainboard.sort((a, b) => a.name.localeCompare(b.name)).filter(a => a.name !== '');
        sideboard = sideboard.sort((a, b) => a.name.localeCompare(b.name)).filter(a => a.name !== '');
    }

    addBoundingBoxes(doc);
    addDecklist(doc, mainboard, sideboard);
    addSecondaryTextElements(doc, input.firstName, input.lastName, input.eventName, input.eventLocation, input.eventDate, input.deckName, input.deckDesigner);

    return doc;
}

function addBoundingBoxes(doc) {
    doc.setLineWidth(1);
    doc.setFillColor(230, 230, 232);

    doc.rect(135, 54, 441, 24);  // date + event
    doc.rect(135, 78, 441, 24);  // location + deck name
    doc.rect(355, 54, 221, 72);  // event + deck name + deck designer
    doc.rect(552, 30, 24, 24, 'FD');   // first letter
    doc.rect(445, 30, 55, 24);   // table number


    doc.rect(27, 140, 24, 628, 'FD');  // last name + first name + dci
    doc.rect(27, 140, 24, 349, 'FD');

    doc.rect(250, 748, 56, 22);  // total number main deck
    doc.rect(524, 694, 56, 22);  // total number side deck
    doc.rect(320, 722, 260, 48); // judge box

    doc.setLineWidth(.5);
    doc.rect(135, 54, 54, 48);   // date + location
    doc.rect(355, 54, 54, 72);   // event + deck name + deck designer
    doc.rect(320, 722, 130, 48); // official use + dc round + status + judge
    doc.rect(320, 722, 260, 12); // official use + main/sb
    doc.rect(320, 734, 260, 12); // dc round + dc round
    doc.rect(320, 746, 260, 12); // status + status
}

function addDecklist(doc, mainboard, sideboard) {
    doc.setLineWidth(.5);

    // Col 1: Mainboard
    for (let y = 186; y < 750; y += 18) {
        doc.line(62, y, 106, y);
        doc.line(116, y, 306, y);
    }

    // Col 2: Mainboard
    for (let y = 186; y < 386; y += 18) {
        doc.line(336, y, 380, y);
        doc.line(390, y, 580, y);
    }

    // Col 2: Sideboard
    for (let y = 438; y < 696; y += 18) {
        doc.line(336, y, 380, y);
        doc.line(390, y, 580, y);
    }

    // Col 1: aainboard Headers
    doc.setFont('times', 'bold');
    doc.setFontSize(13);
    doc.text('Main Deck:', 62, 149);
    doc.setFontSize(11);
    doc.text('# in deck:', 62, 166);  // first row, main deck
    doc.text('Card Name:', 122, 166);

    // Col 2: Mainboard Headers
    doc.setFont('times', 'bold');
    doc.setFontSize(13);
    doc.text('Main Deck Continued:', 336, 149);
    doc.setFontSize(11);
    doc.text('# in deck:', 336, 166); // second row, main deck
    doc.text('Card Name:', 396, 166);

    // Col 2: Sideboard Headers
    doc.setFont('times', 'bold');
    doc.setFontSize(13);
    doc.text('Sideboard:', 336, 404);
    doc.setFontSize(11);
    doc.text('# in deck:', 336, 420); // second row, sideboard
    doc.text('Card Name:', 396, 420);

    // Add the deck to the decklist
    for (let column = 0, x = 84, y = 182; column < 2; column++) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);
        for (let j = 0, i = j + column * 32; j < 32 && i < 44 && i < mainboard.length; j++, i++, y += 18) {
            let card = mainboard[i];
            if (card['quantity'] !== 0) {
                doc.text(card['quantity'].toString(), x, y, 'center');
            }
            doc.text(card['name'], x + 38, y);
        }
        x = 358, y = 182;
    }

    // Add the sideboard to the decklist
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    for (let i = 0, x = 356, y = 434; i < 15 && i < sideboard.length; i++, y += 18) {
        let card = sideboard[i];
        if (card['quantity'] !== 0) {
            doc.text(card['quantity'].toString(), x, y, 'center');
        }
        doc.text(card['name'], x + 38, y);
    }

    // Add the maindeck count
    doc.setFont('times', 'bold');
    doc.setFontSize(11);
    doc.text('Total Number of Cards in Main Deck:', 62, 768);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(20);
    // If there are zero quantity lines exclude the count assuming the user intends to write those later.
    if (!mainboard.some((elem) => elem.quantity === 0 && elem.name !== '')) {
        let count = mainboard.reduce((acc, elem) => acc + elem['quantity'], 0);
        if (count !== 0) {
            doc.text(String(count), 250 + 56 / 2, 766, null, null, 'center');
        }
    }

    // Add the sideboard count
    doc.setFont('times', 'bold');
    doc.setFontSize(11);
    doc.text('Total Number of Cards in Sideboard:', 336, 714);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(20);
    // If there are zero quantity lines exclude the count assuming the user intends to write those later.
    if (!sideboard.some((elem) => elem.quantity === 0 && elem.name !== '')) {
        let count = sideboard.reduce((acc, elem) => acc + elem['quantity'], 0);
        if (count !== 0) {
            doc.text(String(count), 524 + 56 / 2, 712, null, null, 'center');
        }
    }
}

function addSecondaryTextElements(doc,
    firstName, lastName,
    eventName, eventLocation, eventDate,
    deckName, deckDesigner
) {
    doc.setFontSize(15);
    doc.setFont('times', 'bold'); // it's no Helvetica, that's for sure
    doc.text('DECK REGISTRATION SHEET', 135, 45);

    doc.setFont('times', 'normal');
    doc.setFontSize(7);
    doc.text('Table', 421, 40);
    doc.text('Number', 417, 48);
    doc.text('First Letter of', 508, 40);
    doc.text('Last Name', 516, 48);

    if (lastName.length > 0) {
        const lastNameFirstLetter = `${lastName[0]}`.toUpperCase();
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(20);
        doc.text(lastNameFirstLetter, 552 + 12, 49, null, null, 'center'); // x offset + half width of outside box
    }

    // put the event name, deck designer, and deck name into the PDF
    doc.setFont('times', 'normal');
    doc.setFontSize(7);
    doc.text('Date:', 169, 68);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(eventDate, 192, 69.5);

    doc.setFont('times', 'normal');
    doc.setFontSize(7);
    doc.text('Event:', 387, 68);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(eventName, 412, 69.5);

    doc.setFont('times', 'normal');
    doc.setFontSize(7);
    doc.text('Location:', 158, 92);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(eventLocation, 192, 93.5);

    doc.setFont('times', 'normal');
    doc.setFontSize(7);
    doc.text('Deck Name:', 370, 92);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(deckName, 412, 93.5);

    doc.setFont('times', 'normal');
    doc.setFontSize(7);
    doc.text('Deck Designer:', 362, 116);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(deckDesigner, 412, 117.5);

    doc.setFont('times', 'bold');
    doc.setFontSize(13);
    doc.text('PRINT CLEARLY USING ENGLISH CARD NAMES', 36, 121);

    // put the last name into the PDF
    doc.setFont('times', 'normal');
    doc.setFontSize(7);
    doc.text('Last Name:', 41, 760, 90);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(lastName, 43, 724, 90);

    // put the first name into the PDF
    doc.setFont('times', 'normal');
    doc.setFontSize(7);
    doc.text('First Name:', 41, 481, 90);  // rotate
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(firstName, 43, 444, 90);

    doc.setFont('times', 'bold');
    doc.setFontSize(5);
    doc.text('FOR OFFICAL USE ONLY', 324, 730);

    doc.setFont('times', 'normal');
    doc.setFontSize(6);
    doc.text('Deck Check Rd #:', 324, 742); // first row
    doc.text('Status:', 324, 754);
    doc.text('Judge:', 324, 766);

    doc.text('Main/SB:', 454, 730);        // second row
    doc.text('/', 520, 730);
    doc.text('Deck Check Rd #:', 454, 742);
    doc.text('Status:', 454, 754);
    doc.text('Judge:', 454, 766);
}
