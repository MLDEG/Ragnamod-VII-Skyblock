onEvent('recipes', e => {

  //Blastbrick
  e.custom({
    "type": "hexerei:mixingcauldron",
    "liquid": {
      "fluid": "minecraft:lava"
    },
    "ingredients": [
      {
        "item": "twilightforest:mazestone_brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      }
    ],
    "output": {
      "item": "immersiveengineering:blastbrick"
    },
    "liquidOutput": {
      "fluid": "minecraft:lava"
    },
    "fluidLevelsConsumed": 1500
  })

  //Portal Activator
  e.custom({
    "type": "hexerei:mixingcauldron",
    "liquid": {
      "fluid": "undergarden:virulent_mix_source"
    },
    "ingredients": [
      {
        "type": "forge:nbt", "item": "naturesaura:aura_bottle", "count": 1, "nbt": "{stored_type:\"naturesaura:nether\"}"
      },
      {
        "item": "malum:cthonic_gold"
      },
      {
        "item": "minecraft:diamond"
      },
      {
        "item": "undergarden:forgotten_nugget"
      },
      {
        "item": "undergarden:depthrock"
      },
      {
        "item": "undergarden:goo_ball"
      },
      {
        "item": "create:precision_mechanism"
      },
      {
        "item": "undergarden:regalium_crystal"
      }
    ],
    "output": {
      "item": "ragnamod_seven:portal_activator"
    },
    "liquidOutput": {
      "fluid": "undergarden:virulent_mix_source"
    },
    "fluidLevelsConsumed": 1500
  })

  //Ultimate Stew
  e.custom({
    "type": "hexerei:mixingcauldron",
    "liquid": {
      "fluid": "create_confectionery:caramel"
    },
    "ingredients": [
      {
        "item": "ragnamod_seven:infinity_shard"
      },
      {
        "item": "farmersdelight:roasted_mutton_chops"
      },
      {
        "item": "farmersdelight:pasta_with_meatballs"
      },
      {
        "item": "farmersdelight:stuffed_pumpkin_block"
      },
      {
        "item": "farmersdelight:shepherds_pie_block"
      },
      {
        "item": "farmersdelight:nether_salad"
      },
      {
        "item": "farmersdelight:squid_ink_pasta"
      },
      {
        "item": "farmersdelight:hamburger"
      }
    ],
    "output": {
      "item": "avaritia:ultimate_stew"
    },
    "liquidOutput": {
      "fluid": "undergarden:virulent_mix_source"
    },
    "fluidLevelsConsumed": 1000
  })

})