export function parseDecklist(rawDecklist) {
    let response = {
        mainboard: [],
        sideboard: [],
        errors: [],
    }

    let destination = response.mainboard;

    for (let line of rawDecklist.split('\n')) {
        line = line.trim();

        // FIXME: This locks into sideboard appending if you have SB: prefixed, need a way to set it as a temp flag.
        if (/Sideboard/i.test(line) || /^SB:/i.test(line)) {
            destination = response.sideboard;
        }

        // Different sites have different sideboard formats.
        // Look for the word "sideboard" or lines that start with a double slash and skip them.
        if (/Sideboard/i.test(line) || /^\/\//.test(line)) {
            continue;
        }

        if (line === '') {
            destination.push({
                quantity: 0,
                name: '',
            })
            continue;
        }

        // Extract the quantity and card name.
        // Cockatrice prefixes lines with "SB:" for sideboard cards, so optionally matching that.
        // MTGA's export format puts the set and collector number in the line. ex. Arid Mesa (ZEN) 211
        let extract = /^(?:SB:\s)?(?:(\d+)?x?\s)?([^(]+)(?:\s\(.+\) .+)?$/i.exec(line);
        if (extract === null) {
            response.errors.push(line);
            console.warn(`Failed to parse line: ${line}`);
            continue;
        }

        let [, quantity, name] = extract;

        if (quantity === undefined) {
            quantity = 1;
        }

        destination.push({
            quantity: parseInt(quantity),
            name: name.trim(),
        })
    }

    return response;
}
