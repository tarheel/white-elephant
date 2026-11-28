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
    burn: "burning.mp3", // the joint catching; loops while the flame is on it
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
      video: "tv.mp4", // e.g. "tv.mp4"
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
    when: "Saturday, 12/5, 7 pm",
    where: "75 Sheridan Rd, Oakland",
    bring:
      "One wrapped gift that's nice but not too expensive (maybe like $20 to $40?). Don't put your name on it!",
  },

  // THE FAQS. One per stop on the quest, in this order: sign, bell, coats, bath, coraline, rules, charlotte, moldover, food, bar, louis.
  // goal  = the hint shown in the corner while that stop is next
  // title = the question on the card;  text = the answer (a list makes several pages)
  // says  = what that person says when the guest reaches them (people only)
  // [TBD] marks placeholder facts to fill in.
  faqs: {
    sign: {
      goal: "Read the sign by the front steps",
      title: "When and where is this party?",
      text: "When: {when}\nWhere: {where}\nWhy: Each of us has to answer that question for ourselves.",
    },
    bell: {
      goal: "Ring the doorbell next to the front door",
      title: "Is this party kid-friendly?",
      text: "Sorry, no kids. You didn't want to bring them anyway.",
    },
    coats: {
      goal: "Find the coat closet just inside",
      title: "Where do coats and shoes go?",
      text: "Coats: the closet off the entry, next to the bathroom.\nShoes: off, please. Even better, just show up barefoot.\nGifts: under the tree down in the family room.",
    },
    bath: {
      goal: "Find the bathroom",
      title: "Where's the bathroom?",
      text: "Next to the coat closet. We promise it will have been cleaned since the last time our children used it.",
    },
    coraline: {
      goal: "Meet Coraline on the stairs",
      title: "What's the cat situation?",
      text: [
        "You'll be very impressed to hear that we have four cats: Coraline, Hobbes, and our two newest additions, Pompom and Top Hat.",
        "Don't take their cutting remarks personally. They can be quite catty.",
      ],
    },
    rules: {
      goal: "Ask the Rules Nerd how this works",
      title: "How exactly does the white elephant gift exchange work?",
      text: [
        "To start, everyone draws a playing card to establish the order. On your turn, you either open a wrapped gift or steal an opened one. If yours is stolen, you go again right away.",
        "A gift can be stolen {maxSteals} times, then it's locked. You can't steal back what was just taken from you. When a steal happens, both players involved have to take a shot...",
        "unless you're taking BART later, in which case you're exempt, obviously.",
      ],
      says: [
        "We adhere to the official International White Elephant Rules of Engagement, as laid out in the Geneva Convention of 1949.",
      ],
    },
    charlotte: {
      goal: "Find Charlotte in the kitchen",
      title: "What should I bring for the gift exchange?",
      text: "{bring}\nIt can be funny or weird, but make it something that someone (you, for example) would actually want.",
      says: ["Hi, {player}! You made it past the yeti.", "What to bring? {bring}"],
    },
    moldover: {
      goal: "Say hi to Moldover in the kitchen",
      title: "Will there be drugs?",
      text: "Yes, but probably only legal ones.",
    },
    food: {
      goal: "Check out the food on the kitchen island",
      title: "Will there be food?",
      text: [
        "We'll have an array of snacks and appetizer-type things. We recommend eating dinner before coming, but there will be no snackcidents on our watch.",
        "If you want to bring something to add to the mix, go for it.",
      ],
    },
    bar: {
      goal: "Visit the bar on the kitchen counter",
      title: "What about drinks?",
      text: [
        "There will be a solid assortment of beverages -- some festive and some a bit unsettling.",
        "No need to bring anything, but feel free to do so if you'd like.",
      ],
    },
    louis: {
      goal: "Find Louis by the tree down in the family room",
      title: "Anything else?",
      text: "[TBD: RSVP by when, and to whom.]\n[TBD: who to text if you get lost on the front steps.]",
      says: ["You found everything! Congratulations.", "One last thing before we play."],
    },
  },

  // People, cats and monsters, by id. Change a name or any of their lines.
  // "lines" is a list of conversations; each conversation is a list of pages.
  // Any other field you leave out keeps the built-in version.
  people: {
    louis: {
      name: "Louis",
      lines: [["Welcome, {player}. Gifts go under the tree."]],
    },
    charlotte: {
      name: "Charlotte",
      lines: [
        [
          "Hi, {player}! Coats go in the closet off the entry, next to the bathroom. Leave your shoes and your cares by the door.",
          "Actually, keep your cares on hand. You're going to need them tonight.",
        ],
        ["If a cat is sitting on your gift, it's the cat's gift now. House rule."],
      ],
    },
    g1: {
      name: "The Rules Nerd",
      lines: [
        [
          "On your turn you either open a wrapped gift or steal an opened one.",
          "If yours gets stolen, you go again right away. Open or steal.",
        ],
        [
          "A gift can be stolen {maxSteals} times. After that it's locked and its owner is safe.",
          "And you can't steal back the thing that was just taken from you.",
        ],
      ],
    },
    g2: {
      name: "The Regifter",
      lines: [
        [
          "Is regifting allowed? It's encouraged. But... don't regift something just because it sucks.",
        ],
        ["What should you bring? {bring}"],
      ],
    },
    yeti: {
      name: "Rocky",
      lines: [
        ["HRRRAAAWWWRRGH."],
        ["Hrrnnngh. Rrrawwr. Wrrrgh."],
        ["Awghghghghghghghghgh."],
        ["Do you ever feel like no one truly understands you?"],
        ["He is richest who is content with the least, for content is the wealth of nature."],
      ],
    },
    g3: {
      name: "The Early Arriver",
      lines: [
        ["I got here 20 minutes early. I saw unspeakable things."],
        ["When is it? {when}. Not before."],
      ],
    },
    g4: {
      name: "The Oenophile",
      lines: [
        [
          "Do you have to bring a gift to play? Yes. Wine is a separate, additional kindness.",
          "Unless wine is your white elephant gift, I guess? Now I'm confused.",
        ],
        ["No kids this year. Arrange your evening accordingly."],
      ],
    },
    g5: {
      name: "Moldover",
      lines: [
        [
          "I rolled one for the occasion. It's an old Moldover family recipe: salvia and kratom.",
          "Want some? It'll numb the pain for a few minutes.",
        ],
      ],
      again: ["Back already. I rolled another. You in?"],
      no: ["Cool. Maybe later."],
      lit: [
        "There it is.",
        "If the walls start dripping or you're hearing voices, drink water. There's some in the fridge.",
      ],
      after: ["Water. Fridge. Unless you enjoy what's happening to your brain right now."],
    },
    coraline: {
      name: "Coraline",
      lines: [["Coraline is sitting on the stairs scowling. Upstairs is closed."]],
      noFood: [
        "Coraline sniffs the can once and looks at you in disgust.",
        "She does not move. The cat food stays yours.",
      ],
    },
    hobbes: {
      name: "Hobbes",
      lines: [
        [
          "Hobbes is loafed across the top of the stairs.",
          "The game room is not part of the party. Hobbes, on the other hand, is the life of the party.",
        ],
      ],
      noFood: ["Hobbes opens one eye, sees the can, and closes the eye.", "He has standards."],
    },
    k1: {
      name: "Pompom",
      lines: [
        [
          "Pompom blocks the office doorway. She may be small, but she's ferocious.",
          "She cannot be beaten. She can, possibly, be bribed.",
        ],
      ],
      fedNow: [
        "Pompom takes the can and abandons her post without a backward glance. The office is open.",
      ],
      fed: [
        ["Pompom is off duty. She regrets nothing."],
        ["(Pompom licks her whiskers and pretends not to know you.)"],
      ],
    },
    k2: {
      name: "Top Hat",
      lines: [
        [
          "(Top Hat lunges for your throat, then has a change of heart and decides to let you live. For now.)",
        ],
        ["Meow."],
      ],
    },
    bunny: {
      name: "Dust Bunny",
      intro: ["A fierce Dust Bunny rolls out from under the piano."],
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
      intro: [
        "The Fruitcake. It has been regifted at the last three white elephants and it's finally had enough.",
      ],
      win: "The Fruitcake is defeated, yet edible.",
    },
  },

  // What you read when you look at things in the house, by thing.
  objects: {
    sign: ["A sign in the front yard? In this economy?"],
    coats: ["The coat closet. Also a prime location for Seven Minutes in Heaven."],
    toilet: ["If you see a cat drinking out of this, kindly stop it."],
    sink: ["Flush and wash and be on your way."],
    bell: ["The doorbell."],
    tv: [
      "The TV is displaying art.",
      "Below it, a fire. Stockings hung with care, and one hung with indifference.",
    ],
    fridge: ["The fridge. Mostly water at this point."],
    counter: ["The bar. Drinks live here."],
    island: ["The island. Every party ends up standing around it. This one will too."],
    piano: ["A piano. If you can play, you may. If you can't, you also may, briefly."],
    desk: ["A desk. Someone is definitely not checking work email on it."],
  },

  // Narration, goals and short lines from around the house.
  text: {
    hostNotYet: ["Not yet, {player}. You still have {need} to collect.", "Next: {next}."],
    hostReady: ["Everyone's here and the crowd is getting restless. Ready to do this?"],
    hostAfter: ["Same time next year. Bring something worse."],
    locked: ["Locked. The doorbell is on the wall to your right."],
    bellAgain: [
      "And I'm thinkin' about my doorbell\nWhen you gonna ring it, and when you gonna ring it",
    ],
    bellWait: ["Patience. Something large is coming."],
    bellRing: ["Ding-dong.", "Heavy footsteps. Very heavy. The earth moves."],
    backAway: ["You back away slowly. It lets you. It has nowhere to be."],
    backAwayGuard: ["Wise."],
    faint: [
      "You faint, gracefully.",
      "You wake up on the sectional with full HP. Nobody mentions it.",
    ],
    catNeedFood: ["You have nothing a cat would want.", "There's a can of cat food in the fridge."],
    catNoFood: ["Not interested. The cat food stays yours."],
    catFed: ["It worked! The way is open."],
    firesWon: ["The fires won. You wake up on the family room rug, oddly refreshed."],
    firesAngry: "The fires did not care for that.",
    pianoAuto: "Auto-meow engaged.",
    pianoDone: "The piano would like a treat.",
    unwrapHint: "Tap it to tear off the paper.",
    water: "You drink it right there. Your brain works again. Sort of.",
    lit: "It's lit. Just like this party.",
    chugStart: "You take a knee because you are a person of honor.",
    chugDone: "Pounded. +3 HP. Your dignity is somewhere back by the stairs.",
    doorGreet: ["HRRRAAAWWWRRGH!", "(The beast steps aside and waves you in.)"],
    goalHost: "Go down to the family room and tell Louis you're ready",
    goalWater: "Drink water from the fridge",
    goalDone: "Exchange survived",
    faqCard: "FAQ {n} of {total}",
    faqAll: "That's all {total}. You now know more about this party than the hosts do.",
    bookTitle: "The FAQs",
    bookLocked: "Not found yet.",
    verdicts: [
      {
        min: 8,
        line: "A triumph. You are truly the whitest of elephants.",
      },
      {
        min: 5,
        line: "Respectable.",
      },
      {
        min: 0,
        line: "You're going to bring this back next year, aren't you?",
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
      note: "Restores 3 HP. You know the rules and so do I.",
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
      note: "Restores 1 HP. You may pay for it later.",
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
      note: "Not for you. Someone smaller might want it.",
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
      name: "a bottle of fancy extra virgin olive oil",
      desc: "This might be too nice of a gift for a white elephant.",
    },
    candle: {
      short: "Scented candle",
      name: "a scented candle",
      desc: "The scent is called Elon Musk.",
    },
    waffle: {
      short: "Cat waffle iron",
      name: "a cat-shaped waffle iron",
      desc: "Everyone in the room wants this.",
    },
    tickets: {
      short: "Lottery tickets",
      name: "$25 of scratch tickets",
      desc: "There's a coin taped to the front.",
    },
    pickles: {
      short: "Mystery pickles",
      name: "a jar of mystery pickles",
      desc: "Homemade. Undated. Not sterile.",
    },
    blanket: {
      short: "Enormous blanket",
      name: "an enormous soft blanket",
      desc: "It comes with a target for your back.",
    },
    gong: {
      short: "Desk gong",
      name: "a desk gong",
      desc: "Always. Be. Closing.",
    },
    uke: {
      short: "Emergency ukulele",
      name: "an emergency ukulele",
      desc: "You'll know when it's time.",
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
      title: "The fridge. Someone got here first.",
    },
    food: {
      title: "The food on the island. Tap something to take it.",
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
        [40, "Now you're getting the hang of it."],
        [100, "You've been at this a while. People are looking."],
      ],
    },
    joint: {
      title: "Bring the flame to the tip and hold it there.",
    },
    laptop: {
      title: "The office laptop. Someone left a game running.",
      boot: "White Elephant: The Game. Arrows or tap to move. Walk into people and things.",
      inside: "A laptop. On its screen: an older version of this game.",
      deeper: [
        "A laptop inside the laptop. An even older build, so bad that it must have been made by a human.",
        "Another one. Optimized for 8086 processors.",
        "And another. What the fuck?",
      ],
      bottom: "It's laptops all the way down. Go back to the party.",
    },
    tv: {
      title: "The Frame TV. Tap to press the power button.",
      embedUrl: "https://www.youtube-nocookie.com/embed/OWR3zMaRKis?autoplay=1&playsinline=1&rel=0",
      show: ["PARTY RULES:", "THE OFFICIAL VIDEO"],
      linkLabel: "▶ Play it",
      link: "https://www.youtube.com/watch?v=OWR3zMaRKis",
    },
  },
};
