function solve () {
    class Balloon {
        constructor (balloonColor, gasWeight) {
            this.color = balloonColor;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor (balloonColor, gasWeight, ribbonColor, ribbonLength) {
            super(balloonColor, gasWeight)
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
        get _ribbon () {
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor (balloonColor, gasWeight, ribbonColor, ribbonLength, text) {
            super(balloonColor, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get _text () {
            return this._text;
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}