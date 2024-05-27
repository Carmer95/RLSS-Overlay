import { USPlayer } from "../UpdateState/USPlayer";
import { USTeam } from "../UpdateState/USTeam";

export interface GameContext {
    arena: string;
    isOT: boolean;
    isReplay: boolean; // are we replaying a goal that was scored
    target: string; // who are we currently spectating (no one = "")
    timeRemaining: number; // in seconds
    winner: string;
    players: USPlayer[];
    teams: USTeam[];
    score: {
        blue: number;
        orange: number;
    }
}