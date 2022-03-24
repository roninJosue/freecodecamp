const orbitalPeriod = (arr) => {
  const GM = 398600.4418
  const earthRadius = 6367.4447

  return arr.map(({avgAlt, name}) => {
    const orbitSemiMajorAxis = avgAlt + earthRadius
    const a = orbitSemiMajorAxis ** 3 / GM
    const t = (2 * Math.PI) * Math.sqrt(a)

    return {
      name,
      orbitalPeriod: Math.round(t)
    }
  })
}

console.log(orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}, {name: "iss", avgAlt: 413.6}]))