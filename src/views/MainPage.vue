<template>
    <div class="section">
        <div class="columns">
            <div class="column col-6 col-sm-12">
                <form class="form-group form-horizontal">
                    <h4>Configuration</h4>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="game-select">Game</label>
                        <div class="col-9 col-sm-12">
                            <select class="form-select select" id="game-select" v-model="config.game" style="width:100%;">
                                <option value="magic">Magic: The Gathering</option>
                                <option value="lorcana">Lorcana</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="style-select">Style</label>
                        <div class="col-9 col-sm-12">
                            <select class="form-select select" id="style-select" v-model="config.style" style="width:100%;">
                                <option value="dci">DCI</option>
                                <option value="starcitygames">StarCityGames</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="style-select">Sorting</label>
                        <div class="col-9 col-sm-12">
                            <select class="form-select select" id="sorting-select" v-model="config.sorting" style="width:100%;">
                                <option value="unsorted">Unsorted</option>
                                <option value="alphabetical">Alphabetical</option>
                            </select>
                        </div>
                    </div>
                </form>

                <form class="form-group form-horizontal">
                    <h4>Personal Information</h4>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="first-name">First Name</label>
                        <input class="form-input col-9 col-sm-12" id="first-name" type="text" v-model="input.firstName" placeholder="First Name" autofocus>
                    </div>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="last-name">Last Name</label>
                        <input class="form-input col-9 col-sm-12" id="last-name" type="text" v-model="input.lastName" placeholder="Last Name">
                    </div>
                </form>

                <form class="form-group form-horizontal">
                    <h4>Event Information</h4>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="event-name">Event Name</label>
                        <input class="form-input col-9 col-sm-12" id="event-name" type="text" v-model="input.eventName" placeholder="Event Name">
                    </div>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="event-location">Event Location</label>
                        <input class="form-input col-9 col-sm-12" id="event-location" type="text" v-model="input.eventLocation" placeholder="Event Location">
                    </div>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="event-date">Event Date</label>
                        <input class="form-input col-9 col-sm-12" id="event-date" type="date" v-model="input.eventDate" placeholder="Event Date">
                    </div>
                </form>
            </div>

            <div class="column col-6 col-sm-12">
                <form class="form-group form-horizontal">
                    <h4>Deck Information</h4>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="deck-name">Deck Name</label>
                        <input class="form-input col-9 col-sm-12" id="deck-name" type="text" v-model="input.deckName" placeholder="Deck Name">
                    </div>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="deck-designer">Deck Designer</label>
                        <input class="form-input col-9 col-sm-12" id="deck-designer" type="text" v-model="input.deckDesigner" placeholder="Deck Designer">
                    </div>
                </form>

                <form class="form-group form-horizontal">
                    <h4>Main Deck</h4>
                    <div class="form-group">
                        <!-- <label class="form-label" for="deck-input">Main Deck</label> -->
                        <textarea class="form-input" id="deck-input" rows="7" v-model="input.decklist"
                            placeholder="4 Wild Nacatl&#10;0x Griselbrand&#10;3x Price of Progress&#10;4 Strip Mine (ATQ) 82d&#10;2 Tinker Bell - Giant Fairy&#10;4 Rafiki - Mysterious Sage"></textarea>
                    </div>

                    <h4>Sideboard</h4>
                    <div class="form-group">
                        <!-- <label class="form-label" for="deck-input">Sideboard</label> -->
                        <textarea class="form-input" id="deck-input" rows="7" v-model="input.sideboard"
                            placeholder="// Sideboard&#10;Orim's Chant&#10;3x Rough // Tumble&#10;SB: dead/gone"></textarea>
                    </div>
                </form>

                <form class="form-group btn-group btn-group-block">
                    <button id="print" class="btn btn-primary" type="button" @click="print()"><span class="icon-print"></span> Print</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// import { normalizeCardName } from '../helpers/CardNames.mjs';
import { jsPDF } from 'jspdf';

export default {
    name: 'MainPage',
    components: {

    },
    data() {
        return {
            config: {
                game: '',
                style: '',
                sorting: '',
            },
            input: {
                firstName: '',
                lastName: '',
                eventName: '',
                eventLocation: '',
                eventDate: '',
                deckName: '',
                deckDesigner: '',
                decklist: '',
                sideboard: '',
            },
            cards: [],
            errors: [],
        }
    },
    mounted() {
        this.loadConfig();
    },
    methods: {
        storeConfig() {
            localStorage.game = this.config.game;
            localStorage.style = this.config.style;
            localStorage.sorting = this.config.sorting;
            localStorage.firstName = this.input.firstName;
            localStorage.lastName = this.input.lastName;
        },
        loadConfig() {
            this.config.game = localStorage.game ?? 'magic';
            this.config.style = localStorage.style ?? 'dci';
            this.config.sorting = localStorage.sorting ?? 'unsorted';
            this.input.firstName = localStorage.firstName ?? '';
            this.input.lastName = localStorage.lastName ?? '';
        },
        print() {
            this.storeConfig();
            this.parseCardList();

            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'pt',
                format: 'letter',
            });

            doc.setFont('helvetica');
            // doc.setFontSize(12);
            // doc.setDrawColor.apply(null, [43, 46, 52]);
            // doc.setTextColor.apply(null, [0]);
            // doc.text(`${JSON.stringify(this.cards)}`, 10, 10);
            // doc.save('test.pdf');
        },
        async parseCardList() {
            // this.cards = [];
            let parsedInput = [];

            for (let line of this.input.decklist.split('\n')) {
                line = line.trim();

                // Different sites have different sideboard formats.
                // Look for the word "sideboard" or lines that start with a double slash and skip them.
                if (/Sideboard/i.test(line) || /^\/\//.test(line) || line === '') {
                    continue;
                }

                // Extract the quantity and card name.
                // Cockatrice prefixes lines with "SB:" for sideboard cards, so optionally matching that.
                // MTGA's export format puts the set and collector number in the line. ex. Arid Mesa (ZEN) 211
                let extract = /^(?:SB:\s)?(?:(\d+)?x?\s)?([^(]+)(?:\s\(.+\) .+)?$/i.exec(line);
                if (extract === null) {
                    this.errors.push(line);
                    console.warn(`Failed to parse line: ${line}`);
                    continue;
                }

                let [, quantity, name] = extract;

                if (quantity === undefined) {
                    quantity = 1;
                }

                parsedInput.push({
                    quantity: quantity === '0' ? '' : quantity,
                    name: name.trim(),
                })
            }

            this.cards = parsedInput;
            console.log(JSON.stringify(this.cards));
        }
    }
}
</script>

<style>

</style>
