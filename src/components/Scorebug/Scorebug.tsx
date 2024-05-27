import { useContext } from "react"
import { GameInfoContext } from "../../contexts/GameInfoContext"
import { ScorebugBlue, ScorebugClock, ScorebugOrange, ScorebugWrapper, TopDiv } from "./Scorebug.style"
import { GameService } from "../../services/gameService"

export const Scorebug = () => {
    const { gameInfo } = useContext(GameInfoContext)

    return (
        <TopDiv>
            <ScorebugWrapper>
                <ScorebugOrange>
                    ORANGE {"   "} { gameInfo.score.orange }
                </ScorebugOrange>
                <ScorebugClock>{ GameService.getClockFromSeconds(gameInfo.timeRemaining, gameInfo.isOT) }
                </ScorebugClock>
                <ScorebugBlue>
                    BLUE {"   "} { gameInfo.score.blue }
                </ScorebugBlue>
            </ScorebugWrapper>
        </TopDiv>
    )
}