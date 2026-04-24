onEvent('recipes', e => {

  function crushedCreateSmelting(item, molten, amount, molten2, amount2, temp, time) { e.custom({ "type": "tconstruct:ore_melting", "rate": "metal", "ingredient": { "item": item }, "result": { "fluid": molten, "amount": amount }, "temperature": temp, "time": time, "byproducts": [{ "fluid": molten2, "amount": amount2 }] }) }

  crushedCreateSmelting('create:crushed_raw_iron', 'tconstruct:molten_iron', 90, 'tconstruct:molten_nickel', 90, 800, 90)
  crushedCreateSmelting('create:crushed_raw_gold', 'tconstruct:molten_gold', 90, 'tconstruct:molten_copper', 90, 700, 85)
  crushedCreateSmelting('create:crushed_raw_copper', 'tconstruct:molten_copper', 90, 'tconstruct:molten_gold', 30, 500, 75)
  crushedCreateSmelting('create:crushed_raw_zinc', 'tconstruct:molten_zinc', 90, 'tconstruct:molten_tin', 90, 420, 70)
  crushedCreateSmelting('create:crushed_raw_osmium', 'tconstruct:molten_osmium', 90, 'tconstruct:molten_iron', 90, 975, 98)
  crushedCreateSmelting('create:crushed_raw_silver', 'tconstruct:molten_silver', 90, 'tconstruct:molten_lead', 90, 790, 90)
  crushedCreateSmelting('create:crushed_raw_tin', 'tconstruct:molten_tin', 90, 'tconstruct:molten_copper', 90, 225, 59)
  crushedCreateSmelting('create:crushed_raw_lead', 'tconstruct:molten_lead', 90, 'tconstruct:molten_silver', 90, 330, 65)
  crushedCreateSmelting('create:crushed_raw_aluminum', 'tconstruct:molten_aluminum', 90, 'tconstruct:molten_iron', 90, 425, 71)
  crushedCreateSmelting('create:crushed_raw_uranium', 'tconstruct:molten_uranium', 90, 'tconstruct:molten_lead', 90, 830, 92)
  crushedCreateSmelting('create:crushed_raw_nickel', 'tconstruct:molten_nickel', 90, 'tconstruct:molten_platinum', 30, 950, 97)

})
