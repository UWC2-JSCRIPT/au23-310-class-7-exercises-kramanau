describe("Tests for the BlackJack Game", () => {
    it("should calculate the score of the hand with no aces", () => {
        const hand = [
            { displayVal: "Six", val: 6, suits: "hearts"},
            { displayVal: "Seven", val: 7, suits: "hearts"}
        ];

        const result = calcPoints(hand);
        expect(result.total).toEqual(13);
        expect(result.isSoft).toEqual(false);
    })

    it("should calculate the score of the hand with 1 ace (soft)", () => {
        const hand = [
            { displayVal: "Ace", val: 1, suits: "hearts"},
            { displayVal: "Eight", val: 8, suits: "hearts"}
        ]

        const result = calcPoints(hand);
        expect(result.total).toEqual(19);
        expect(result.isSoft).toEqual(true);
    })

    it("should calculate the score of the hand with 1 ace (not soft)", () => {
        const hand = [
            { displayVal: "Eight", val: 8, suits: "hearts"},
            { displayVal: "Nine", val: 9, suits: "hearts"},
            { displayVal: "Ace", val: 1, suits: "hearts"}
        ]

        const result = calcPoints(hand);
        expect(result.total).toEqual(18);
        expect(result.isSoft).toEqual(false);
    })

    it("should calculate the score of the hand with many aces (soft)", () => {
        const hand = [
            { displayVal: "Ace", val: 1, suits: "hearts"},
            { displayVal: "Nine", val: 9, suits: "hearts"},
            { displayVal: "Ace", val: 1, suits: "hearts"}
        ]

        const result = calcPoints(hand);
        expect(result.total).toEqual(21);
        expect(result.isSoft).toEqual(true);
    })

    it("should calculate the score of the hand with many aces (not soft)", () => {
        const hand = [
            { displayVal: "Nine", val: 9, suits: "hearts"},
            { displayVal: "Three", val: 3, suits: "hearts"},
            { displayVal: "Ace", val: 1, suits: "hearts"},
            { displayVal: "Ace", val: 1, suits: "hearts"}
        ]

        const result = calcPoints(hand);
        expect(result.total).toEqual(14);
        expect(result.isSoft).toEqual(false);
    })

});

describe("Tests for the Soccer Game", () => {
    describe("test for the getTotalPoints function", () =>{
        it("should return an accurate score points for a string input", () => {
            const result = getTotalPoints("wwdlw");
            expect(result).toEqual(10);
        })
    })

    describe("test for the orderTeams function", () => {
        it("should correctly construct string", () => {
           const teams = [
            {name: 'team1', results: 'wwlwdd'},
            {name: 'team2', results: 'llwldd'},
            {name: 'team3', results: 'wldddd'},
            {name: 'team4', results: 'llllll'},
           ]

           const result = orderTeams(...teams);
           expect(result).toEqual("team1: 11\nteam2: 5\nteam3: 7\nteam4: 0");
        })
    })

});