import {IDirData} from "../directoryServices/dirTypes";

export interface IAnime {
    name: string;
    seasons: Map<string, string[]>;

    tvdbId: string;
    areEpisodesInKodiFormat(): boolean;
    updateEpisodeNames();
}