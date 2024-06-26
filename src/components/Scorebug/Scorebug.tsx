import { useContext } from "react"
import { GameInfoContext } from "../../contexts/GameInfoContext"
import { ScorebugBlue, ScorebugClock, ScorebugOrange, ScorebugWrapper, TopDiv } from "./Scorebug.style"
import { GameService } from "../../services/gameService"

export const Scorebug = () => {
    const { gameInfo } = useContext(GameInfoContext)

    return (
        <TopDiv>
            <ScorebugWrapper>
                <ScorebugBlue>
                    BLUE {"   "} { gameInfo.score.blue }
                </ScorebugBlue>
                <ScorebugClock>{ GameService.getClockFromSeconds(gameInfo.timeRemaining, gameInfo.isOT) }
                </ScorebugClock>
                <ScorebugOrange>
                    ORANGE {"   "} { gameInfo.score.orange }
                </ScorebugOrange>
            </ScorebugWrapper>
        </TopDiv>
    )
}