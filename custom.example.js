/* custom.js: your own settings for White Elephant: The Game.
   Save this as custom.js in the same folder as the game's HTML file, then edit.
   When you download a newer HTML file, just replace the HTML: this file stays as it is.

   Anything here is laid over the game's built-in settings (CONFIG in the HTML file):
   - an object merges key by key, so you only list what you change;
   - a list or a single value replaces the built-in one entirely.
   Delete or leave out anything you don't want to change. */
window.CUSTOM = {

  // Folder for sound and video files given by name only. "" = next to the HTML file.
  // A name with a folder or a web address (e.g. "clips/a.mp3", "https://...") is used as written.
  mediaDir: "media/",

  // Sound files (mp3 is safest). Empty "" keeps the built-in synthesized sound.
  // A list plays one at random each time, never the same one twice in a row.
  sounds: {
    stairs: "",                 // walking down into the cave, e.g. "stairs.mp3"
    ice: "",                    // raising the Smirnoff Ice, e.g. "item.mp3"
    doorbell: "",               // ringing the front doorbell, e.g. "dingdong.mp3"
    gulp: [],                   // each gulp while pounding the Ice, one picked at random, e.g. ["gulp1.mp3", "gulp2.mp3"]
    burp: "",                   // the burp after the last gulp, e.g. "burp.mp3"
    steal: [],                  // a gift being stolen in the exchange, one picked at random, e.g. ["steal1.mp3", "steal2.mp3"]
    open: [],                   // a gift being unwrapped, one picked at random, e.g. ["rip1.mp3", "rip2.mp3"]
    yeti: []                    // the yeti, e.g. ["roar1.mp3", "roar2.mp3", "roar3.mp3"]
  },

  // The TV: a video file (mp4, H.264 + AAC) plays on the screen when you press the remote.
  reach: {
    tv: {
      video: "",                // e.g. "tv.mp4"
      videoLoop: true           // false = play once and stop on the last frame
    }
  },

  // Songs, e.g. pasted from:  python3 midi2song.py tune.mid --name disco
  songs: {
  },

  // Which song plays in which room. Built-in songs: hall, muzak, sax, jazz, dinner, kitchen.
  // List only the rooms you change. Rooms: Porch, Entry, Stairs, Hall, Coat closet, Office,
  // Bathroom, Living room, Family room, Dining room, Kitchen.
  music: {
    // "Kitchen": "disco"
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
    "when": "[date and time TBD]",
    "where": "[address TBD]",
    "bring": "One wrapped gift, about $[TBD]. No name on it."
  },

  // THE FAQS. One per stop on the quest, in this order: sign, bell, coats, bath, cave, coraline, piano, rules, charlotte, moldover, fridge, bar, louis.
  // goal  = the hint shown in the corner while that stop is next
  // title = the question on the card;  text = the answer (a list makes several pages)
  // says  = what that person says when the guest reaches them (people only)
  // [TBD] marks placeholder facts to fill in.
  faqs: {
    "sign": {
      "goal": "Read the sign by the front steps",
      "title": "When and where is it?",
      "text": "When: {when}\nWhere: {where}\n[TBD: parking, and which door.]"
    },
    "bell": {
      "goal": "Ring the doorbell, beside the front door",
      "title": "How do I get in?",
      "text": "Ring the bell. Knocking loses to the music every time.\n[TBD: what time to show up, and how late is too late.]"
    },
    "coats": {
      "goal": "Find the coat closet, off the entry",
      "title": "Where do coats and shoes go?",
      "text": "Coats: the closet off the entry, next to the bathroom.\nShoes: [TBD: on or off].\nGifts: under the tree, down in the family room."
    },
    "bath": {
      "goal": "Find the bathroom, next to the coat closet",
      "title": "Where's the bathroom?",
      "text": "Off the entry, first door past the stairs.\n[TBD: anything else guests should know. The lock, for instance.]"
    },
    "cave": {
      "goal": "Investigate the hole in the wall by the bathroom",
      "title": "Will there be drinking games?",
      "text": "Only the one. If you find a Smirnoff Ice, you take a knee and finish it. Those are the rules and we did not write them.\n[TBD: anything real about this.]"
    },
    "coraline": {
      "goal": "Meet Coraline, on the stairs",
      "title": "Are there pets?",
      "text": "Four cats: Coraline, Hobbes, Pom Pom and Top Hat. They will investigate your coat and your gift.\nUpstairs and the garage are closed.\n[TBD: allergy note.]"
    },
    "piano": {
      "goal": "Try the piano in the living room",
      "title": "Is this a quiet party?",
      "text": "No. There are instruments and you may touch them.\n[TBD: music, noise, and when it winds down.]"
    },
    "rules": {
      "goal": "Ask the Rules Lawyer how this works",
      "title": "How does the exchange work?",
      "text": [
        "Everyone draws a number. On your turn you open a wrapped gift or steal an opened one. If yours is stolen, you go again right away.",
        "A gift can be stolen {maxSteals} times, then it's locked. You can't steal back what was just taken from you.\n[TBD: house rules.]"
      ],
      "says": [
        "On your turn you either open a wrapped gift or steal an opened one.",
        "If yours gets stolen, you go again right away. Open or steal.",
        "A gift can be stolen {maxSteals} times. After that it's locked and its owner is safe."
      ]
    },
    "charlotte": {
      "goal": "Find Charlotte in the kitchen",
      "title": "What should I bring?",
      "text": "{bring}\n[TBD: price range, how weird is too weird, and whether regifting counts.]",
      "says": [
        "Hi {player}! You made it past the yeti.",
        "What to bring? {bring}"
      ]
    },
    "moldover": {
      "goal": "Say hi to Moldover, in the kitchen",
      "title": "Who's invited?",
      "text": "Adults only this year. No kids.\n[TBD: plus-ones, and what the party is and isn't friendly to.]"
    },
    "fridge": {
      "goal": "Raid the fridge",
      "title": "Will there be food?",
      "text": "[TBD: dinner or snacks, and what to eat beforehand.]\n[TBD: where to send dietary restrictions.]"
    },
    "bar": {
      "goal": "Visit the bar, on the kitchen counter",
      "title": "What about drinks?",
      "text": "[TBD: what we're providing, and whether to bring your own.]\nThere will be things without alcohol in them too."
    },
    "louis": {
      "goal": "Find Louis by the tree, down in the family room",
      "title": "Anything else?",
      "text": "[TBD: RSVP by when, and to whom.]\n[TBD: who to text if you get lost on the front steps.]",
      "says": [
        "You found everything. Most people never make it past the cave.",
        "One last thing before we play."
      ]
    }
  },

  // People, cats and monsters, by id. Change a name or any of their lines.
  // "lines" is a list of conversations; each conversation is a list of pages.
  // Any other field you leave out keeps the built-in version.
  people: {
    "louis": {
      "name": "Louis",
      "lines": [
        [
          "Welcome, {player}. Gifts go under the tree. Opinions go in the kitchen."
        ]
      ]
    },
    "charlotte": {
      "name": "Charlotte",
      "lines": [
        [
          "Hi {player}! Coats go in the closet off the entry, next to the bathroom. Shoes are your call."
        ],
        [
          "If a cat is sitting on your gift, it's the cat's gift now. House rule."
        ]
      ]
    },
    "g1": {
      "name": "The Rules Lawyer",
      "lines": [
        [
          "On your turn you either open a wrapped gift or steal an opened one.",
          "If yours gets stolen, you go again right away. Open or steal."
        ],
        [
          "A gift can be stolen {maxSteals} times. After that it's locked and its owner is safe.",
          "And you can't steal back the thing that was just taken from you. Hold the grudge until later."
        ]
      ]
    },
    "g2": {
      "name": "The Regifter",
      "lines": [
        [
          "Is regifting allowed? It's encouraged. That candle has seen four of these parties."
        ],
        [
          "What should you bring? {bring}"
        ]
      ]
    },
    "yeti": {
      "name": "Rocky",
      "lines": [
        [
          "HRRRAAAWWWRRGH."
        ],
        [
          "Hrrnnngh. Rrrawwr. Wrrrgh."
        ]
      ]
    },
    "g3": {
      "name": "The Early Arriver",
      "lines": [
        [
          "I got here twenty minutes early. The hosts were still vacuuming. We don't talk about it."
        ],
        [
          "When is it? {when}. Not before."
        ]
      ]
    },
    "g4": {
      "name": "The One Who Brought Wine",
      "lines": [
        [
          "Do you have to bring a gift to play? Yes. Wine is a separate, additional kindness."
        ],
        [
          "No kids this year. Arrange your evening accordingly."
        ]
      ]
    },
    "g5": {
      "name": "Moldover",
      "lines": [
        [
          "I rolled one for the occasion. Want some? We'll crack a window."
        ]
      ],
      "again": [
        "Back already. I rolled another. I always roll another. Round two?"
      ],
      "no": [
        "Respect. Offer stands."
      ],
      "lit": [
        "There it is.",
        "If the walls start dripping, drink some water. There's some in the fridge."
      ],
      "after": [
        "You good? You're staring at the wall again. Water. Fridge. Go."
      ]
    },
    "coraline": {
      "name": "Coraline",
      "lines": [
        [
          "Coraline is sitting on the stairs. Upstairs is closed. She is the sign."
        ]
      ],
      "noFood": [
        "Coraline sniffs the can once and looks at you like you have insulted her ancestors.",
        "She does not move. The cat food stays yours."
      ]
    },
    "hobbes": {
      "name": "Hobbes",
      "lines": [
        [
          "Hobbes is loafed across the top of the garage stairs.",
          "The game room is not part of the party. Hobbes is very much part of the party."
        ]
      ],
      "noFood": [
        "Hobbes opens one eye, sees the can, and closes the eye.",
        "He has standards. He also has a loaf to maintain."
      ]
    },
    "k1": {
      "name": "Pom Pom",
      "lines": [
        [
          "Pom Pom holds the office doorway. Pom Pom is mostly tail and has never lost.",
          "She cannot be beaten. She can, possibly, be bought. She keeps glancing toward the kitchen."
        ]
      ],
      "fedNow": [
        "Pom Pom considers the can. Pom Pom considers her post.",
        "The can wins. She abandons the doorway without a backward glance.",
        "The office is open."
      ],
      "fed": [
        [
          "Pom Pom is off duty. She regrets nothing."
        ],
        [
          "(Pom Pom licks her whiskers and pretends not to know you.)"
        ]
      ]
    },
    "k2": {
      "name": "Top Hat",
      "lines": [
        [
          "(Top Hat attacks your shoelace and declares victory.)"
        ],
        [
          "(Top Hat is not part of the exchange. Top Hat disagrees.)"
        ]
      ]
    },
    "bunny": {
      "name": "Dust Bunny",
      "intro": [
        "A Dust Bunny rolls out from under the piano. The vacuuming was not thorough."
      ],
      "win": "The Dust Bunny disperses. The living room is, briefly, clean."
    },
    "lights": {
      "name": "Tangled String Lights",
      "intro": [
        "A knot of string lights guards the backyard doors. One bulb is out, so none of them work, so it is angry."
      ],
      "win": "You find the bad bulb. The lights go limp with relief."
    },
    "cake": {
      "name": "The Fruitcake",
      "intro": [
        "The Fruitcake. It has been regifted since 1987 and it has had enough."
      ],
      "win": "The Fruitcake is defeated. It is still, technically, edible."
    }
  },

  // What you read when you look at things in the house, by thing.
  objects: {
    "tree": [
      "A tree. It is doing its best."
    ],
    "gifts": [
      "The gift pile. Yours is in there somewhere, anonymous and wrapped.",
      "Talk to the host when you're ready to start."
    ],
    "tv": [
      "The TV is displaying art. It is not for watching. This has been discussed.",
      "Below it, a fire. Stockings hung with care, and one hung with indifference."
    ],
    "fireplace": [
      "A second fireplace. This house does not ration them."
    ],
    "fridge": [
      "The fridge is full of things labeled FOR THE PARTY. This is the party. Leave them."
    ],
    "counter": [
      "Snacks. You are allowed to eat these. This has been a FAQ."
    ],
    "island": [
      "The island. Every party ends up standing around it. This one will too."
    ],
    "stools": [
      "Three stools. Four people will try."
    ],
    "sofa": [
      "Prime exchange seating. Claim it early."
    ],
    "chaise": [
      "The chaise. Whoever gets it is not getting up to steal anything."
    ],
    "chaisev": [
      "A chaise. Technically office furniture."
    ],
    "door": [
      "This door stays shut. Use the other one like everybody else."
    ],
    "coffee": [
      "A coffee table. Coasters are implied."
    ],
    "ottoman": [
      "An ottoman. Technically seating."
    ],
    "chair": [
      "A chair with opinions about posture."
    ],
    "rocker": [
      "A rocking chair. Sit at your own tempo."
    ],
    "piano": [
      "A piano. If you can play, you may. If you can't, you also may, briefly."
    ],
    "guitar": [
      "A guitar. No Wonderwall."
    ],
    "guitars": [
      "Two more guitars. Still no Wonderwall."
    ],
    "bookshelf": [
      "Books, sorted by color. Do not re-shelve them by author."
    ],
    "bookside": [
      "Books, sorted by color. Do not re-shelve them by author."
    ],
    "nook": [
      "More books. The low shelf is not a seat."
    ],
    "armoire": [
      "An armoire. It has seen things. Mostly coats."
    ],
    "roundtable": [
      "A round table. Neutral ground for people avoiding the island."
    ],
    "dining": [
      "The dining table. It has a lazy Susan. Spin responsibly."
    ],
    "sideboard": [
      "Candles, a lamp, and a place to put a drink you will forget about."
    ],
    "bench": [
      "A bench with a view of the family room, for guests who prefer to heckle."
    ],
    "ovens": [
      "Something is in the oven. It is not ready. Stop opening it."
    ],
    "cabinets": [
      "Cabinets. The glasses are in the one you open last."
    ],
    "desk": [
      "A desk. Someone is definitely not checking work email on it."
    ],
    "toilet": [
      "The bathroom. You found it without asking anyone. Well done."
    ],
    "sink": [
      "Wash your hands. There is shared cheese."
    ],
    "plant": [
      "A plant. Do not put your drink in it."
    ],
    "shelves": [
      "Books, sorted by color. Do not re-shelve them by author."
    ],
    "catbed": [
      "A cat bed. Unoccupied, which means a cat is on your coat."
    ],
    "globe": [
      "A globe. Spin it and go wherever your finger lands. After the party."
    ],
    "pouf": [
      "A pouf and a side table. Overflow seating for the fashionably late."
    ],
    "cattree": [
      "A cat tree. Reserved seating. You are not on the list."
    ],
    "lamp": [
      "A lamp, doing mood lighting on purpose."
    ],
    "mirror": [
      "A mirror with a garland. You look ready to lose a gift."
    ],
    "art": [
      "Art. Nod thoughtfully."
    ],
    "window": [
      "Dark out. It's December."
    ],
    "H": [
      "A half wall with garland. The family room is down there. Use the steps like a civilized guest."
    ],
    "c": [
      "Columns. Load-bearing, probably. Do not lean with intent."
    ],
    "W": [
      "A wall of windows. Somewhere out there is the backyard."
    ],
    "B": [
      "The backyard. It's December. Stay in."
    ],
    "shoebasket": [
      "A basket of shoes. Shoes off is the house rule. The cats can smell your choices."
    ],
    "rattan": [
      "A rattan cabinet. Shoes in the bottom, mysteries in the top."
    ],
    "basket": [
      "An empty basket. It is waiting for something to deserve it."
    ],
    "mailbox": [
      "The mailbox. Nothing but catalogs. And one more catalog."
    ],
    "pot": [
      "A potted plant. It has seen many coats come and go."
    ],
    "maple": [
      "A Japanese maple, lit from below like it is about to make an announcement."
    ],
    "bell": [
      "The doorbell."
    ],
    "sign": [
      "A sign, staked into the planter with real commitment."
    ],
    "pantry": [
      "The pantry. Crackers live here. So does the good chocolate, which you did not see."
    ],
    "coats": [
      "The coat closet. Coats go here. Yes, there is room."
    ],
    "bins": [
      "Trash, compost, recycling. In that order. There will be a quiz."
    ],
    "canebench": [
      "A cane bench behind the couch. Mostly it holds whatever the cats knock off the windowsill."
    ],
    "kidtable": [
      "A very small table. No kids tonight, so it's available. You will not fit."
    ]
  },

  // Narration, goals and short lines from around the house.
  text: {
    "hostNotYet": [
      "Not yet, {player}. You still have {need} to collect.",
      "Next: {next}."
    ],
    "hostReady": [
      "Everyone's here and nobody has left with the good snacks. Ready to do this?"
    ],
    "hostAfter": [
      "Same time next year. Bring something worse."
    ],
    "locked": [
      "Locked. The doorbell is on the wall to your right."
    ],
    "bellAgain": [
      "You ring it again. From inside, a muffled HRRRNGH that means: it is open, come in."
    ],
    "bellWait": [
      "Patience. Something large is coming."
    ],
    "bellRing": [
      "Ding-dong.",
      "Heavy footsteps. Very heavy. The floor complains."
    ],
    "backAway": [
      "You back away slowly. It lets you. It has nowhere to be."
    ],
    "backAwayGuard": [
      "Wise."
    ],
    "faint": [
      "You faint, gracefully.",
      "You wake up on the sectional with full HP. Nobody mentions it."
    ],
    "petPurr": [
      "Purring. +1 HP. The way remains closed."
    ],
    "catNoFood": [
      "Not interested. The cat food stays yours."
    ],
    "catFed": [
      "It works. The way is open."
    ],
    "firesWon": [
      "The fires won. You wake up on the family room rug with all of your HP and none of your dignity."
    ],
    "firesAngry": "The fires did not care for that.",
    "pianoAuto": "Auto-meow engaged.",
    "pianoDone": "The piano would like a treat.",
    "unwrapHint": "Tap it to tear off the paper.",
    "water": "You drink it right there. The walls hold still.",
    "lit": "It's lit.",
    "chugStart": "You take a knee. Tradition is tradition.",
    "chugDone": "Pounded. +3 HP. Your dignity is somewhere back by the stairs.",
    "doorGreet": [
      "HRRRAAAWWWRRGH!",
      "(It steps aside and waves you in. The party hat survived the doorframe. Barely.)"
    ],
    "goalHost": "Tell Louis you're ready, by the tree in the family room",
    "goalWater": "Drink water from the fridge",
    "goalDone": "Exchange survived",
    "faqCard": "FAQ {n} of {total}",
    "faqAll": "That's all {total}. You now know more about this party than the hosts do.",
    "bookTitle": "The FAQs",
    "bookLocked": "Not found yet.",
    "verdicts": [
      {
        "min": 8,
        "line": "A triumph. Guard it on the way to the car."
      },
      {
        "min": 5,
        "line": "Respectable. You will use it once and mention it often."
      },
      {
        "min": 0,
        "line": "Somewhere, a regifter smiles. See you next year, when you bring it back."
      }
    ]
  },

  // Items you can pick up: their names and descriptions.
  items: {
    "cookie": {
      "name": "Cookie",
      "note": "Restores 4 HP."
    },
    "ice": {
      "name": "Smirnoff Ice",
      "note": "Restores 3 HP. You know the rules."
    },
    "cheese": {
      "name": "Cheese cube",
      "note": "Restores 6 HP. It was labeled FOR THE PARTY."
    },
    "lint": {
      "name": "Heroic lint",
      "note": "A trophy. Do not eat it."
    },
    "bulb": {
      "name": "Spare bulb",
      "note": "A trophy. The one bulb that worked."
    },
    "slice": {
      "name": "Fruitcake slice",
      "note": "Restores 1 HP. Costs some dignity."
    },
    "platter": {
      "name": "Party platter",
      "note": "Restores 6 HP. It was labeled FOR THE PARTY."
    },
    "pizza": {
      "name": "Cold pizza",
      "note": "Restores 5 HP. Better cold. This is not up for debate."
    },
    "eggnog": {
      "name": "Eggnog",
      "note": "Restores 4 HP. Thick."
    },
    "seltzer": {
      "name": "Seltzer",
      "note": "Restores 2 HP. Hydration counts."
    },
    "pickle": {
      "name": "Mystery pickle",
      "note": "Restores 1 HP. Undated."
    },
    "catfood": {
      "name": "Cat food",
      "note": "Restores 1 HP if you eat it. Someone smaller might want it more."
    },
    "red": {
      "name": "Glass of red",
      "note": "Restores 3 HP. Goes with everything on the island."
    },
    "white": {
      "name": "Glass of white",
      "note": "Restores 3 HP. Chilled, unlike the conversation about steal rules."
    },
    "bubbly": {
      "name": "Glass of bubbly",
      "note": "Restores 3 HP. You are now celebrating something."
    },
    "whiskey": {
      "name": "Whiskey, neat",
      "note": "Restores 4 HP. Sip it. This is not that kind of party. Yet."
    },
    "beer": {
      "name": "Beer",
      "note": "Restores 2 HP. Reliable."
    },
    "cider": {
      "name": "Sparkling cider",
      "note": "Restores 2 HP. All of the fizz, none of the consequences."
    },
    "water": {
      "name": "Water",
      "note": "Restores 2 HP. Clears the head."
    }
  },

  // The presents in the exchange, by picture. short = label on the pile, name = in sentences, desc = what you learn when you open it.
  gifts: {
    "fish": {
      "short": "Singing wall fish",
      "name": "a singing wall fish",
      "desc": "Batteries included, regrettably."
    },
    "oil": {
      "short": "Fancy olive oil",
      "name": "a bottle of fancy olive oil",
      "desc": "Someone here spent real money. Find them."
    },
    "candle": {
      "short": "Scented candle",
      "name": "a scented candle",
      "desc": "The scent is called Cabin."
    },
    "waffle": {
      "short": "Cat waffle iron",
      "name": "a cat-shaped waffle iron",
      "desc": "Everyone in the room wants this."
    },
    "tickets": {
      "short": "Scratch tickets",
      "name": "ten dollars of scratch tickets",
      "desc": "There's a coin taped to the front."
    },
    "pickles": {
      "short": "Mystery pickles",
      "name": "a jar of mystery pickles",
      "desc": "Homemade. Undated."
    },
    "blanket": {
      "short": "Enormous blanket",
      "name": "an enormous soft blanket",
      "desc": "It comes with a target for your back."
    },
    "gong": {
      "short": "Desk gong",
      "name": "a desk gong",
      "desc": "Small gong, small mallet, large consequences."
    },
    "uke": {
      "short": "Emergency ukulele",
      "name": "an emergency ukulele",
      "desc": "Break glass in case of silence."
    },
    "pillow": {
      "short": "Dog sequin pillow",
      "name": "a sequin pillow of a stranger's dog",
      "desc": "Nobody knows whose dog."
    }
  },

  // First-person views: the line at the top, plus the cave's lines and the piano's running commentary.
  viewText: {
    "fridge": {
      "title": "The fridge. Tap something to take it."
    },
    "bar": {
      "title": "The bar. Tap a drink to take it."
    },
    "cave": {
      "title": "A cave. In the hallway. Sure. Walk around.",
      "say": [
        "IT'S DANGEROUS TO GO",
        "ALONE! TAKE THIS."
      ],
      "got": [
        "YOU'VE BEEN ICED.",
        "TAKE A KNEE."
      ],
      "again": [
        "ONE PER CUSTOMER.",
        ""
      ]
    },
    "piano": {
      "title": "The piano. Recently tuned. Go on.",
      "after": [
        [
          1,
          "That is not a piano sound."
        ],
        [
          10,
          "Every key. Every single key is a cat."
        ],
        [
          40,
          "Somewhere, Top Hat is taking this personally."
        ],
        [
          100,
          "You have been at this a while. People are looking."
        ]
      ]
    },
    "joint": {
      "title": "Bring the flame to the tip and hold it there."
    },
    "laptop": {
      "title": "The office laptop. Someone left a game running.",
      "boot": "White Elephant: The Game. Arrows or tap to move. Walk into people and things.",
      "inside": "A laptop. On its screen: this game, but an older build.",
      "deeper": [
        "A laptop, inside the laptop. An older build: the art budget had not arrived yet.",
        "Another one. This build predates most colours.",
        "And another. This build predates the rest of them."
      ],
      "bottom": "It's laptops all the way down. Go back to the party.",
      "noView": "{name}: not implemented in this build.",
      "monster": "A wild {name}. Combat is not implemented. It wins on a technicality."
    },
    "tv": {
      "title": "The Frame TV. Tap to press the power button.",
      "embedUrl": "https://www.youtube-nocookie.com/embed/OWR3zMaRKis?autoplay=1&playsinline=1&rel=0",
      "show": [
        "PARTY RULES:",
        "THE OFFICIAL VIDEO"
      ],
      "linkLabel": "▶ Play it",
      "link": "https://www.youtube.com/watch?v=OWR3zMaRKis"
    }
  }

};
