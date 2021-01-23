//second task

const armyInfo = {}

armyInfo.kingName = prompt('Имя короля?')
armyInfo.armyLose = prompt('потери армии короля?')
armyInfo.fullArmy = prompt('сколько было воинов в армии короля?')
armyInfo.fullEnemyArmy = prompt('сколько врагов было?')
armyInfo.enemyLose = prompt('сколько враги потеряли воинов?')
alert(
  `Король ${armyInfo.kingName}, мы победили вражескую армию в ${
    armyInfo.fullEnemyArmy
  }! Враг бежит, оставив на поле боя ${
    armyInfo.enemyLose
  } павших воинов. Наши потери король ${armyInfo.kingName} составили ${
    armyInfo.armyLose
  } героически павших воинов от всей нашей армии в ${
    armyInfo.fullArmy
  } солдат! Мы победили, сохранив ${
    armyInfo.fullArmy - armyInfo.armyLose
  } воинов. И можем продолжить преследовать остатки вражеской армии в ${
    armyInfo.fullEnemyArmy - armyInfo.enemyLose
  } солдат. С победой король ${armyInfo.kingName}!!`
)
