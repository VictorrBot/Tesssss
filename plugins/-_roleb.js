const ranks = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Hunter Trainee': 0,
  'Novice Hunter': 50,
  'Experienced Hunter': 100,
  'Master Hunter': 150,
  'Elite Hunter': 200,
  'Legendary Hunter': 250,
  'Hunter Champion': 300,
  'Hunter Explorer': 350,
  'Hunter Adventurer': 400,
  'Hunter Tracker': 450,
  'Hunter Pathfinder': 500,
  'Hunter Pioneer': 550,
  'Hunter Ranger': 600,
  'Hunter Tracker II': 650,
  'Hunter Pathfinder II': 700,
  'Hunter Pioneer II': 750,
  'Hunter Ranger II': 800,
  'Hunter Tracker III': 850,
  'Hunter Pathfinder III': 900,
  'Hunter Pioneer III': 950,
  'Hunter Ranger III': 1000,
  'Hunter Slayer': 1050,
  'Hunter Killer': 1100,
  'Hunter Destroyer': 1150,
  'Hunter Assassin': 1200,
  'Hunter Executioner': 1250,
  'Hunter Hero': 1300,
  'Hunter Guardian': 1350,
  'Hunter Paladin': 1400,
  'Hunter Champion II': 1450,
  'Hunter Explorer II': 1500,
  'Hunter Adventurer II': 1550,
  'Hunter Tracker IV': 1600,
  'Hunter Pathfinder IV': 1650,
  'Hunter Pioneer IV': 1700,
  'Hunter Ranger IV': 1750,
  'Hunter Slayer II': 1800,
  'Hunter Killer II': 1850,
  'Hunter Destroyer II': 1900,
  'Hunter Assassin II': 1950,
  'Hunter Executioner II': 2000,
  'Hunter Hero II': 2050,
  'Hunter Guardian II': 2100,
  'Hunter Paladin II': 2150,
  'Hunter Champion III': 2200,
  'Hunter Explorer III': 2250,
  'Hunter Adventurer III': 2300,
  'Hunter Tracker V': 2350,
  'Hunter Pathfinder V': 2400,
  'Hunter Pioneer V': 2450,
  'Hunter Ranger V': 2500,
  'Hunter Slayer III': 2550,
  'Hunter Killer III': 2600,
  'Hunter Destroyer III': 2650,
  'Hunter Assassin III': 2700,
  'Hunter Executioner III': 2750,
  'Hunter Hero III': 2800,
  'Hunter Guardian III': 2850,
  'Hunter Paladin III': 2900,
  'Hunter Champion IV': 2950,
  'Hunter Explorer IV': 3000,
  'Hunter Adventurer IV': 3050,
  'Hunter Tracker VI': 3100,
  'Hunter Pathfinder VI': 3150,
  'Hunter Pioneer VI': 3200,
  'Hunter Ranger VI': 3250,
  'Hunter Slayer IV': 3300,
  'Hunter Killer IV': 3350,
  'Hunter Destroyer IV': 3400,
  'Hunter Assassin IV': 3450,
  'Hunter Executioner IV': 3500,
  'Hunter Hero IV': 3550,
  'Hunter Guardian IV': 3600,
  'Hunter Paladin IV': 3650,
  'Hunter Champion V': 3700,
  'Hunter Explorer V': 3750,
}

export function before(m) {
  let user = db.data.users[m.sender]
  let levelhunter = user.levelhunter
  let rank = (Object.entries(ranks).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => levelhunter >= minLevel) || Object.entries(ranks)[0])[0]
  user.rank = rank
  return !0
}