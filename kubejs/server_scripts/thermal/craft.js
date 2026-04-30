onEvent('recipes', e => {

  //Machine Frame
  e.custom({
    "type": "thermal:smelter",
    "input": [
      { "item": "immersiveengineering:sheetmetal_iron" },
      { "item": "immersiveengineering:sheetmetal_steel" },
      { "item": "industrialforegoing:machine_frame_simple" }
    ],
    "result": [{ "item": "thermal:machine_frame", "count": 1 }],
    "energy": 3200
  })

  //Netherite Integral Component
  e.shaped(Item.of('ragnamod_seven:upgrade_augment_5', '{AugmentData:{BaseMod:5.0f,Type:"Upgrade"}}'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'thermal_extra:shellite_plate',
      B: 'thermal:netherite_gear',
      C: 'thermal_extra:upgrade_augment'
    })

  //Flux-Infused Integral Component
  e.shaped(Item.of('ragnamod_seven:upgrade_augment_6', '{AugmentData:{BaseMod:6.0f,Type:"Upgrade"}}'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'redstone_arsenal:flux_gem',
      B: 'redstone_arsenal:flux_gear',
      C: 'ragnamod_seven:upgrade_augment_5'
    })
  //Flux-Infused Integral Component
  e.shaped(Item.of('ragnamod_seven:upgrade_augment_7', '{AugmentData:{BaseMod:7.0f,Type:"Upgrade"}}'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'malum:spectral_lens',
      B: 'ragnamod_seven:soulstained_steel_gear',
      C: 'ragnamod_seven:upgrade_augment_6'
    })



})