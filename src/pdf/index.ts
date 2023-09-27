import { Input, Config } from '../helpers/Types';
import { render as wotcRender } from './wotc';
import { render as lorcanaRender } from './lorcana';

export function render(input: Input, config: Config) {
    switch(config.game) {
        case 'magic':
            return wotcRender(input, config);
        case 'lorcana':
            return lorcanaRender(input, config);
        default:
            return wotcRender(input, config);
    }
}
