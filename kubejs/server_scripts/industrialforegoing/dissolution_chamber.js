onEvent('recipes', e => {

  //Thermal Machine Frame
  e.custom({
    "input": [
      { "tag": "forge:plastic" },
      { "tag": "industrialforegoing:machine_frame/simple" },
      { "tag": "forge:plastic" },
      { "item": "minecraft:netherite_scrap" },
      { "item": "minecraft:netherite_scrap" },
      { "tag": "forge:ingots/gold" },
      { "item": "ftbic:dual_uranium_fuel_rod" },
      { "tag": "forge:ingots/gold" }
    ],
    "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
    "processingTime": 300,
    "output": {
      "item": "thermal:machine_frame",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  //Steel Casing
  e.custom({
    "input": [
      { "tag": "forge:plastic" },
      { "item": "industrialforegoing:machine_frame_supreme" },
      { "tag": "forge:plastic" },
      { "item": "architects_palette:unobtanium" },
      { "item": "architects_palette:unobtanium" },
      { "tag": "forge:nether_stars" },
      { "item": "thermal_extra:upgrade_augment" },
      { "tag": "forge:nether_stars" }
    ],
    "inputFluid": "{FluidName:\"industrialforegoing:biofuel\",Amount:500}",
    "processingTime": 300,
    "output": {
      "item": "mekanism:steel_casing",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  function efficiencyAddon(in1, in2, in3, in4, in5, fluid, out, efficiency) {
    e.custom({
      "input": [
        { "item": in2 },
        { "item": in1 },
        { "item": in2 },
        { "item": in3 },
        { "item": in3 },
        { "item": in4 },
        { "item": in5 },
        { "item": in4 }
      ],
      "inputFluid": '{FluidName:"' + fluid + '",Amount:1000}',
      "processingTime": 200,
      "output": { "item": out, "count": 1, "nbt": "{TitaniumAugment:{Efficiency:" + efficiency + "}}" },
      "type": "industrialforegoing:dissolution_chamber"
    })
  }
  efficiencyAddon('industrialforegoing:efficiency_addon_2', 'thermal:signalum_dust', 'minecraft:glass_pane', 'thermal:netherite_gear', 'minecraft:blaze_rod', 'industrialforegoing:pink_slime', 'ragnamod_seven:efficiency_addon_3', '0.7f')

  efficiencyAddon('ragnamod_seven:efficiency_addon_3', 'ftbic:mixed_metal_blend', 'minecraft:glass_pane', 'ragnamod_seven:iridium_alloy_gear', 'minecraft:blaze_rod', 'industrialforegoing:meat', 'ragnamod_seven:efficiency_addon_4', '0.6f')

  efficiencyAddon('ragnamod_seven:efficiency_addon_4', 'powah:crystal_nitro', 'minecraft:glass_pane', 'ragnamod_seven:antimatter_gear', 'minecraft:blaze_rod', 'industrialforegoing:ether_gas', 'ragnamod_seven:efficiency_addon_5', '0.5f')

  function speedAddon(in1, in2, in3, in4, in5, fluid, out, speed) {
    e.custom({
      "input": [
        { "item": in2 },
        { "item": in1 },
        { "item": in2 },
        { "item": in3 },
        { "item": in3 },
        { "item": in4 },
        { "item": in5 },
        { "item": in4 }
      ],
      "inputFluid": '{FluidName:"' + fluid + '",Amount:1000}',
      "processingTime": 200,
      "output": { "item": out, "count": 1, "nbt": "{TitaniumAugment:{Speed:" + speed + "}}" },
      "type": "industrialforegoing:dissolution_chamber"
    })
  }
  speedAddon('industrialforegoing:speed_addon_2', 'thermal:signalum_dust', 'minecraft:glass_pane', 'thermal:netherite_gear', 'minecraft:sugar', 'industrialforegoing:pink_slime', 'ragnamod_seven:speed_addon_3', '4.0f')

  speedAddon('ragnamod_seven:speed_addon_3', 'ftbic:mixed_metal_blend', 'minecraft:glass_pane', 'ragnamod_seven:iridium_alloy_gear', 'minecraft:sugar', 'industrialforegoing:meat', 'ragnamod_seven:speed_addon_4', '5.0f')

  speedAddon('ragnamod_seven:speed_addon_4', 'powah:crystal_nitro', 'minecraft:glass_pane', 'ragnamod_seven:antimatter_gear', 'minecraft:sugar', 'industrialforegoing:ether_gas', 'ragnamod_seven:speed_addon_5', '6.0f')
  function processingAddon(in1, in2, in3, in4, in5, in6, fluid, out, processing) {
    e.custom({
      "input": [
        { "item": in2 },
        { "item": in1 },
        { "item": in2 },
        { "item": in3 },
        { "item": in3 },
        { "item": in4 },
        { "item": in5 },
        { "tag": in6 }
      ],
      "inputFluid": '{FluidName:"' + fluid + '",Amount:1000}',
      "processingTime": 200,
      "output": { "item": out, "count": 1, "nbt": "{TitaniumAugment:{Processing:" + processing + "}}" },
      "type": "industrialforegoing:dissolution_chamber"
    })
  }
  processingAddon('industrialforegoing:processing_addon_2', 'thermal:signalum_dust', 'minecraft:glass_pane', 'minecraft:furnace', 'thermal:netherite_gear', 'forge:workbenches', 'industrialforegoing:pink_slime', 'ragnamod_seven:processing_addon_3', '4.0f')

  processingAddon('ragnamod_seven:processing_addon_3', 'ftbic:mixed_metal_blend', 'minecraft:glass_pane', 'minecraft:furnace', 'ragnamod_seven:iridium_alloy_gear', 'forge:workbenches', 'industrialforegoing:meat', 'ragnamod_seven:processing_addon_4', '5.0f')

  processingAddon('ragnamod_seven:processing_addon_4', 'powah:crystal_nitro', 'minecraft:glass_pane', 'minecraft:furnace', 'ragnamod_seven:antimatter_gear', 'forge:workbenches', 'industrialforegoing:ether_gas', 'ragnamod_seven:processing_addon_5', '6.0f')
})