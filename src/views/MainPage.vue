<template>
    <div class="section">
        <div class="columns">
            <div class="column col-6 col-sm-12">
                <form class="form-group form-horizontal">
                    <h5>Personal Information</h5>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="first-name">First Name</label>
                        <input class="form-input col-9 col-sm-12" id="first-name" type="text" v-model="input.firstName" placeholder="First Name" autofocus>
                    </div>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="last-name">Last Name</label>
                        <input class="form-input col-9 col-sm-12" id="last-name" type="text" v-model="input.lastName" placeholder="Last Name">
                    </div>
                </form>

                <div class="divider"></div>

                <form class="form-group form-horizontal">
                    <h5>Event Information</h5>
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

                <div class="divider"></div>

                <form class="form-group form-horizontal">
                    <h5>Deck Information</h5>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="deck-name">Deck Name</label>
                        <input class="form-input col-9 col-sm-12" id="deck-name" type="text" v-model="input.deckName" placeholder="Deck Name">
                    </div>
                    <div class="form-group">
                        <label class="form-label col-3 col-sm-12" for="deck-designer">Deck Designer</label>
                        <input class="form-input col-9 col-sm-12" id="deck-designer" type="text" v-model="input.deckDesigner" placeholder="Deck Designer">
                    </div>
                </form>

                <div class="divider"></div>

                <form class="form-group form-horizontal">
                    <h5>Main Deck <span class="icon-info tooltip" data-tooltip="Use 0 for an empty quantity."></span></h5>
                    <div class="form-group">
                        <textarea class="form-input" id="deck-input" rows="7" v-model="input.decklist"
                            placeholder="4 Wild Nacatl&#10;0x Griselbrand&#10;3x Price of Progress&#10;4 Strip Mine (ATQ) 82d&#10;2 Tinker Bell - Giant Fairy&#10;4 Rafiki - Mysterious Sage"></textarea>
                    </div>

                    <h5>Sideboard</h5>
                    <div class="form-group">
                        <textarea class="form-input" id="deck-input" rows="7" v-model="input.sideboard"
                            placeholder="// Sideboard&#10;Orim's Chant&#10;3x Rough // Tumble&#10;SB: dead/gone"></textarea>
                    </div>
                </form>
            </div>

            <div class="column col-6 col-sm-12">
                <form class="form-group form-horizontal">
                    <h5>Configuration</h5>
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
                                <option value="wotc">Wizards of the Coast</option>
                                <!-- <option value="starcitygames">StarCityGames</option> -->
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

                <form class="form-group btn-group btn-group-block">
                    <button id="save" class="btn btn-block btn-primary" type="button" @click="save()"><span class="icon-floppy-disk"></span> Save</button>
                    <!-- <button id="print" class="btn btn-primary" type="button" @click="print()"><span class="icon-printer"></span> Print</button> -->
                </form>

                <iframe id="decklist-preview" :src="preview" style="width:100%; height:580px;"></iframe>
            </div>

            <div class="column col-12 pt-2 pb-2">
                <div class="divider"></div>
            </div>

            <div class="column col-12">
                <div class="text-muted text-small text-center">
                    <!-- <p>Built at {{ getBuildTimestamp() }} from <a :href="'https://github.com/haganbmj/decklist/commit/' + getBuildSha()" target="_blank">{{ getBuildSha() }}</a>.</p> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// TODO: Switch to setup scripts.
import debounce from 'lodash.debounce';
import { render } from '../pdf/index';
import jsPDF from 'jspdf';
import { Config, Input } from '../helpers/Types';

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
            } as Config,
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
            } as Input,
            // FIXME: Currently unused as there's no parsing being done on the entries.
            errors: [] as string[],
            doc: undefined as jsPDF | undefined,
        }
    },
    computed: {
        preview: function(): string | undefined {
            return this.doc?.output('dataurlstring');
        }
    },
    mounted() {
        this.loadConfig();
        this.debouncedUpdateDoc = debounce(this.updateDoc, 500);
        this.debouncedUpdateDoc();
    },
    watch: {
        input: {
            handler() {
                this.debouncedUpdateDoc();
            },
            deep: true,
        },
        config: {
            handler() {
                this.debouncedUpdateDoc();
            },
            deep: true,
        }
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
            this.config.style = localStorage.style ?? 'wotc';
            this.config.sorting = localStorage.sorting ?? 'unsorted';
            this.input.firstName = localStorage.firstName ?? '';
            this.input.lastName = localStorage.lastName ?? '';
        },
        updateDoc() {
            this.storeConfig();
            this.doc = render(this.input, this.config);
        },
        save() {
            this.doc?.save('decklist.pdf');
        },
        print() {
            // Is there a way to throw it to print dialog?
            // Might be able to invoke a print on the iframe or something.
        },
        getBuildTimestamp() {
            // return import.meta.env.VITE_BUILD_TIMESTAMP;
            return document.documentElement.dataset.buildTimestamp;
        },
        getBuildSha() {
            // return import.meta.env.VITE_BUILD_SHA || 'local';
            return document.documentElement.dataset.buildSha || 'local';
        },
    }
}
</script>

<style lang="postcss">
.tooltip::after {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
    padding: 0.4rem 0.6rem;
}
</style>
