/* custom.js: your own settings for White Elephant: The Game.
   Save this as custom.js in the same folder as the game's HTML file, then edit.
   When you download a newer HTML file, just replace the HTML: this file stays as it is.

   Anything here is laid over the game's built-in settings (CONFIG in the HTML file):
   - an object merges key by key, so you only list what you change;
   - a list or a single value replaces the built-in one entirely.
   Delete or leave out anything you don't want to change. */
window.CUSTOM = {
  // Sound files (mp3 is safest). Empty "" keeps the built-in synthesized sound.
  // A list plays one at random each time, never the same one twice in a row.
  sounds: {
    stairs: "stairs.wav", // walking down into the cave, e.g. "stairs.mp3"
    ice: "item.wav", // raising the Smirnoff Ice, e.g. "item.mp3"
    gulp: "gulp.wav",
    burp: "burp.wav",
    doorbell: "doorbell.mp3", // ringing the front doorbell, e.g. "dingdong.mp3"
    yeti: [
      "Chewbacca sound-1.mp3",
      "Chewbacca sound-2.mp3",
      "Chewbacca sound-3.mp3",
      "Chewbacca sound-4.mp3",
      "Chewbacca sound-5.mp3",
      "Chewbacca sound-6.mp3",
      "Chewbacca sound-7.mp3",
    ], // the yeti, e.g. ["roar1.mp3", "roar2.mp3", "roar3.mp3"]
    steal: "yoink.wav",
    open: "open_gift.mp3",
  },

  // The TV: a video file (mp4, H.264 + AAC) plays on the screen when you press the remote.
  reach: {
    tv: {
      video: "480p.mov", // e.g. "tv.mp4"
      videoLoop: true, // false = play once and stop on the last frame
    },
  },

  // Songs, e.g. pasted from:  python3 midi2song.py tune.mid --name disco
  songs: {},

  // Which song plays in which room. Built-in songs: hall, muzak, sax, jazz, dinner, kitchen.
  // List only the rooms you change. Rooms: Porch, Entry, Stairs, Hall, Coat closet, Office,
  // Bathroom, Living room, Family room, Dining room, Kitchen.
  music: {
    "Living room": "careless",
    Kitchen: "all_i_want_for_christmas",
  },

  /* ======================================================================
     TEXT. Everything below is a copy of the game's own wording, so you can
     edit it in place. Delete anything you don't change: whatever is missing
     here falls back to the game's built-in text.
     {player} is replaced by the guest's name; {when}, {where} and {bring}
     by the party details just below.
     ====================================================================== */

  // The party details, shown on the sign out front.
  party: {
    when: "[date and time TBD]",
    where: "[address TBD]",
    bring: "One wrapped gift, about $[TBD]. No name on it.",
  },

  // People, cats and monsters, by id. Change a name or any of their lines.
  // "lines" is a list of conversations; each conversation is a list of pages.
  // Any other field you leave out keeps the built-in version.
  people: {
    louis: {
      name: "Louis",
      lines: [["Welcome, {player}. Gifts go under the tree. Opinions go in the kitchen."]],
    },
    charlotte: {
      name: "Charlotte",
      lines: [
        [
          "Hi {player}! Coats go in the closet off the entry, next to the bathroom. Shoes are your call.",
        ],
        ["If a cat is sitting on your gift, it's the cat's gift now. House rule."],
      ],
    },
    g1: {
      name: "The Rules Lawyer",
      lines: [
        [
          "On your turn you either open a wrapped gift or steal an opened one.",
          "If yours gets stolen, you go again right away. Open or steal.",
        ],
        [
          "A gift can be stolen {maxSteals} times. After that it's locked and its owner is safe.",
          "And you can't steal back the thing that was just taken from you. Hold the grudge until later.",
        ],
      ],
    },
    g2: {
      name: "The Regifter",
      lines: [
        ["Is regifting allowed? It's encouraged. That candle has seen four of these parties."],
        ["What should you bring? {bring}"],
      ],
    },
    yeti: {
      name: "Rocky",
      lines: [["HRRRAAAWWWRRGH."], ["Hrrnnngh. Rrrawwr. Wrrrgh."]],
    },
    g3: {
      name: "The Early Arriver",
      lines: [
        [
          "I got here twenty minutes early. The hosts were still vacuuming. We don't talk about it.",
        ],
        ["When is it? {when}. Not before."],
      ],
    },
    g4: {
      name: "The One Who Brought Wine",
      lines: [
        ["Do you have to bring a gift to play? Yes. Wine is a separate, additional kindness."],
        ["No kids this year. Arrange your evening accordingly."],
      ],
    },
    g5: {
      name: "Moldover",
      lines: [["I rolled one for the occasion. Want some? We'll crack a window."]],
      again: ["Back already. I rolled another. I always roll another. Round two?"],
      no: ["Respect. Offer stands."],
      lit: [
        "There it is.",
        "If the walls start dripping, drink some water. There's some in the fridge.",
      ],
      after: ["You good? You're staring at the wall again. Water. Fridge. Go."],
    },
    coraline: {
      name: "Coraline",
      lines: [["Coraline is sitting on the stairs. Upstairs is closed. She is the sign."]],
    },
    hobbes: {
      name: "Hobbes",
      lines: [
        [
          "Hobbes is loafed across the top of the garage stairs.",
          "The game room is not part of the party. Hobbes is very much part of the party.",
        ],
      ],
    },
    k1: {
      name: "Pom Pom",
      lines: [["Pom Pom holds the office doorway. Pom Pom is mostly tail and has never lost."]],
    },
    k2: {
      name: "Top Hat",
      lines: [
        ["(Top Hat attacks your shoelace and declares victory.)"],
        ["(Top Hat is not part of the exchange. Top Hat disagrees.)"],
      ],
    },
    bunny: {
      name: "Dust Bunny",
      intro: ["A Dust Bunny rolls out from under the piano. The vacuuming was not thorough."],
      win: "The Dust Bunny disperses. The living room is, briefly, clean.",
    },
    lights: {
      name: "Tangled String Lights",
      intro: [
        "A knot of string lights guards the backyard doors. One bulb is out, so none of them work, so it is angry.",
      ],
      win: "You find the bad bulb. The lights go limp with relief.",
    },
    cake: {
      name: "The Fruitcake",
      intro: ["The Fruitcake. It has been regifted since 1987 and it has had enough."],
      win: "The Fruitcake is defeated. It is still, technically, edible.",
    },
  },

  // What you read when you look at things in the house, by thing.
  objects: {
    tree: ["A tree. It is doing its best."],
    gifts: [
      "The gift pile. Yours is in there somewhere, anonymous and wrapped.",
      "Talk to the host when you're ready to start.",
    ],
    tv: [
      "The TV is displaying art. It is not for watching. This has been discussed.",
      "Below it, a fire. Stockings hung with care, and one hung with indifference.",
    ],
    fireplace: ["A second fireplace. This house does not ration them."],
    fridge: ["The fridge is full of things labeled FOR THE PARTY. This is the party. Leave them."],
    counter: ["Snacks. You are allowed to eat these. This has been a FAQ."],
    island: ["The island. Every party ends up standing around it. This one will too."],
    stools: ["Three stools. Four people will try."],
    sofa: ["Prime exchange seating. Claim it early."],
    chaise: ["The chaise. Whoever gets it is not getting up to steal anything."],
    chaisev: ["A chaise. Technically office furniture."],
    door: ["This door stays shut. Use the other one like everybody else."],
    coffee: ["A coffee table. Coasters are implied."],
    ottoman: ["An ottoman. Technically seating."],
    chair: ["A chair with opinions about posture."],
    rocker: ["A rocking chair. Sit at your own tempo."],
    piano: ["A piano. If you can play, you may. If you can't, you also may, briefly."],
    guitar: ["A guitar. No Wonderwall."],
    guitars: ["Two more guitars. Still no Wonderwall."],
    bookshelf: ["Books, sorted by color. Do not re-shelve them by author."],
    bookside: ["Books, sorted by color. Do not re-shelve them by author."],
    nook: ["More books. The low shelf is not a seat."],
    armoire: ["An armoire. It has seen things. Mostly coats."],
    roundtable: ["A round table. Neutral ground for people avoiding the island."],
    dining: ["The dining table. It has a lazy Susan. Spin responsibly."],
    sideboard: ["Candles, a lamp, and a place to put a drink you will forget about."],
    bench: ["A bench with a view of the family room, for guests who prefer to heckle."],
    ovens: ["Something is in the oven. It is not ready. Stop opening it."],
    cabinets: ["Cabinets. The glasses are in the one you open last."],
    desk: ["A desk. Someone is definitely not checking work email on it."],
    toilet: ["The bathroom is here, off the entry. This has been a FAQ."],
    sink: ["Wash your hands. There is shared cheese."],
    plant: ["A plant. Do not put your drink in it."],
    shelves: ["Books, sorted by color. Do not re-shelve them by author."],
    catbed: ["A cat bed. Unoccupied, which means a cat is on your coat."],
    globe: ["A globe. Spin it and go wherever your finger lands. After the party."],
    pouf: ["A pouf and a side table. Overflow seating for the fashionably late."],
    cattree: ["A cat tree. Reserved seating. You are not on the list."],
    lamp: ["A lamp, doing mood lighting on purpose."],
    mirror: ["A mirror with a garland. You look ready to lose a gift."],
    art: ["Art. Nod thoughtfully."],
    window: ["Dark out. It's December."],
    H: [
      "A half wall with garland. The family room is down there. Use the steps like a civilized guest.",
    ],
    c: ["Columns. Load-bearing, probably. Do not lean with intent."],
    W: ["A wall of windows. Somewhere out there is the backyard."],
    B: ["The backyard. It's December. Stay in."],
    rattan: ["A rattan cabinet. Shoes in the bottom, mysteries in the top."],
    basket: ["A basket of shells. Do not take one. Somebody counts them."],
    mailbox: ["The mailbox. Nothing but catalogs. And one more catalog."],
    pot: ["A potted plant. It has seen many coats come and go."],
    maple: ["A Japanese maple, lit from below like it is about to make an announcement."],
    bell: ["The doorbell."],
    sign: ["When: {when}\nWhere: {where}", "Bring: {bring}"],
    pantry: ["The pantry. Crackers live here. So does the good chocolate, which you did not see."],
    coats: ["The coat closet. Coats go here. Yes, there is room. This has been a FAQ."],
    bins: ["Trash, compost, recycling. In that order. There will be a quiz."],
    kidtable: ["A very small table. No kids tonight, so it's available. You will not fit."],
  },

  // Narration, goals and short lines from around the house.
  text: {
    hostNotYet: ["Not yet, {player}. Go mingle. Talk to {need} more before we start."],
    hostReady: ["Everyone's here and nobody has left with the good snacks. Ready to do this?"],
    hostAfter: ["Same time next year. Bring something worse."],
    locked: ["Locked. The doorbell is on the wall to your right."],
    bellAgain: [
      "You ring it again. From inside, a muffled HRRRNGH that means: it is open, come in.",
    ],
    bellWait: ["Patience. Something large is coming."],
    bellRing: ["Ding-dong.", "Heavy footsteps. Very heavy. The floor complains."],
    backAway: ["You back away slowly. It lets you. It has nowhere to be."],
    backAwayGuard: ["Wise."],
    faint: [
      "You faint, gracefully.",
      "You wake up on the sectional with full HP. Nobody mentions it.",
    ],
    petPurr: ["Purring. +1 HP. The way remains closed."],
    firesWon: [
      "The fires won. You wake up on the family room rug with all of your HP and none of your dignity.",
    ],
    firesAngry: "The fires did not care for that.",
    pianoAuto: "Auto-meow engaged.",
    pianoDone: "The piano would like a treat.",
    unwrapHint: "Tap it to tear off the paper.",
    water: "You drink it right there. The walls hold still.",
    lit: "It's lit.",
    doorGreet: [
      "HRRRAAAWWWRRGH!",
      "(It steps aside and waves you in. The party hat survived the doorframe. Barely.)",
    ],
    goalMingle: "Mingle: {done}/{total}",
    goalHost: "Find Louis by the tree, down in the family room",
    goalDone: "Exchange survived",
    verdicts: [
      {
        min: 8,
        line: "A triumph. Guard it on the way to the car.",
      },
      {
        min: 5,
        line: "Respectable. You will use it once and mention it often.",
      },
      {
        min: 0,
        line: "Somewhere, a regifter smiles. See you next year, when you bring it back.",
      },
    ],
  },

  // Items you can pick up: their names and descriptions.
  items: {
    cookie: {
      name: "Cookie",
      note: "Restores 4 HP.",
    },
    ice: {
      name: "Smirnoff Ice",
      note: "Restores 3 HP. You know the rules.",
    },
    cheese: {
      name: "Cheese cube",
      note: "Restores 6 HP. It was labeled FOR THE PARTY.",
    },
    lint: {
      name: "Heroic lint",
      note: "A trophy. Do not eat it.",
    },
    bulb: {
      name: "Spare bulb",
      note: "A trophy. The one bulb that worked.",
    },
    slice: {
      name: "Fruitcake slice",
      note: "Restores 1 HP. Costs some dignity.",
    },
    platter: {
      name: "Party platter",
      note: "Restores 6 HP. It was labeled FOR THE PARTY.",
    },
    pizza: {
      name: "Cold pizza",
      note: "Restores 5 HP. Better cold. This is not up for debate.",
    },
    eggnog: {
      name: "Eggnog",
      note: "Restores 4 HP. Thick.",
    },
    seltzer: {
      name: "Seltzer",
      note: "Restores 2 HP. Hydration counts.",
    },
    pickle: {
      name: "Mystery pickle",
      note: "Restores 1 HP. Undated.",
    },
    catfood: {
      name: "Cat food",
      note: "Restores 1 HP. You have made a choice.",
    },
    red: {
      name: "Glass of red",
      note: "Restores 3 HP. Goes with everything on the island.",
    },
    white: {
      name: "Glass of white",
      note: "Restores 3 HP. Chilled, unlike the conversation about steal rules.",
    },
    bubbly: {
      name: "Glass of bubbly",
      note: "Restores 3 HP. You are now celebrating something.",
    },
    whiskey: {
      name: "Whiskey, neat",
      note: "Restores 4 HP. Sip it. This is not that kind of party. Yet.",
    },
    beer: {
      name: "Beer",
      note: "Restores 2 HP. Reliable.",
    },
    cider: {
      name: "Sparkling cider",
      note: "Restores 2 HP. All of the fizz, none of the consequences.",
    },
    water: {
      name: "Water",
      note: "Restores 2 HP. Clears the head.",
    },
  },

  // The presents in the exchange, by picture. short = label on the pile, name = in sentences, desc = what you learn when you open it.
  gifts: {
    fish: {
      short: "Singing wall fish",
      name: "a singing wall fish",
      desc: "Batteries included, regrettably.",
    },
    oil: {
      short: "Fancy olive oil",
      name: "a bottle of fancy olive oil",
      desc: "Someone here spent real money. Find them.",
    },
    candle: {
      short: "Scented candle",
      name: "a scented candle",
      desc: "The scent is called Cabin.",
    },
    waffle: {
      short: "Cat waffle iron",
      name: "a cat-shaped waffle iron",
      desc: "Everyone in the room wants this.",
    },
    tickets: {
      short: "Scratch tickets",
      name: "ten dollars of scratch tickets",
      desc: "There's a coin taped to the front.",
    },
    pickles: {
      short: "Mystery pickles",
      name: "a jar of mystery pickles",
      desc: "Homemade. Undated.",
    },
    blanket: {
      short: "Enormous blanket",
      name: "an enormous soft blanket",
      desc: "It comes with a target for your back.",
    },
    gong: {
      short: "Desk gong",
      name: "a desk gong",
      desc: "Small gong, small mallet, large consequences.",
    },
    uke: {
      short: "Emergency ukulele",
      name: "an emergency ukulele",
      desc: "Break glass in case of silence.",
    },
    pillow: {
      short: "Dog sequin pillow",
      name: "a sequin pillow of a stranger's dog",
      desc: "Nobody knows whose dog.",
    },
  },

  // First-person views: the line at the top, plus the cave's lines and the piano's running commentary.
  viewText: {
    fridge: {
      title: "The fridge. Tap something to take it.",
    },
    bar: {
      title: "The bar. Tap a drink to take it.",
    },
    cave: {
      title: "A cave. In the hallway. Sure. Walk around.",
      say: ["IT'S DANGEROUS TO GO", "ALONE! TAKE THIS."],
      got: ["YOU'VE BEEN ICED.", "TAKE A KNEE."],
      again: ["ONE PER CUSTOMER.", ""],
    },
    piano: {
      title: "The piano. Recently tuned. Go on.",
      after: [
        [1, "That is not a piano sound."],
        [10, "Every key. Every single key is a cat."],
        [40, "Somewhere, Top Hat is taking this personally."],
        [100, "You have been at this a while. People are looking."],
      ],
    },
    joint: {
      title: "Bring the flame to the tip and hold it there.",
    },
    tv: {
      title: "The Frame TV. Tap to press the power button.",
      video: "",
      embedUrl: "https://www.youtube-nocookie.com/embed/OWR3zMaRKis?autoplay=1&playsinline=1&rel=0",
      show: ["PARTY RULES:", "THE OFFICIAL VIDEO"],
      linkLabel: "▶ Play it",
      link: "https://www.youtube.com/watch?v=OWR3zMaRKis",
    },
  },
};
