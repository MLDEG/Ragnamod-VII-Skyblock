onEvent('recipes', e => {

    //Botany pot
    function soilPot(block, categories, growth) {
        e.custom({ "type": "botanypots:soil", "input": { "item": block }, "display": { "block": block }, "categories": categories, "growthModifier": growth })
    }
    soilPot('quark:red_corundum', 'red_corundum', 1)
    soilPot('quark:orange_corundum', 'orange_corundum', 1)
    soilPot('quark:yellow_corundum', 'yellow_corundum', 1)
    soilPot('quark:green_corundum', 'green_corundum', 1)
    soilPot('quark:blue_corundum', 'blue_corundum', 1)
    soilPot('quark:indigo_corundum', 'indigo_corundum', 1)
    soilPot('quark:violet_corundum', 'violet_corundum', 1)
    soilPot('quark:white_corundum', 'white_corundum', 1)
    soilPot('quark:black_corundum', 'black_corundum', 1)
    soilPot('mysticalagradditions:neutronium_crux', 'neutronium_crux', 3)
    soilPot('mysticalagradditions:awakened_draconium_crux', 'awakened_draconium_crux', 3)
    soilPot('mysticalagradditions:gaia_spirit_crux', 'gaia_spirit_crux', 3)
    soilPot('mysticalagradditions:dragon_egg_crux', 'dragon_egg_crux', 3)
    soilPot('mysticalagradditions:nether_star_crux', 'nether_star_crux', 3)
    soilPot('ragnamod_seven:infinity_crux', 'infinity_crux', 3)
    soilPot('ragnamod_seven:antimatter_crux', 'antimatter_crux', 3)
    soilPot('ragnamod_seven:chaotic_crux', 'chaotic_crux', 3)
    soilPot('ragnamod_seven:alfsteel_crux', 'alfsteel_crux', 3)
    soilPot('mysticalagradditions:nitro_crystal_crux', 'nitro_crystal_crux', 3)

    function corumudm(color) { e.custom({ "type": "botanypots:crop", "seed": { "item": "quark:" + color + "_corundum_cluster" }, "categories": [color + "_corundum"], "growthTicks": 600, "display": { "type": "botanypots:simple", "block": "quark:" + color + "_corundum_cluster" }, "drops": [{ "chance": 1.00, "output": { "item": "quark:" + color + "_corundum_cluster" }, "minRolls": 1, "maxRolls": 2 }, { "chance": 1.00, "output": { "item": "quark:" + color + "_corundum" }, "minRolls": 1, "maxRolls": 2 }] }) }
    var color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
    color.forEach(C => { corumudm(C) })

    //Nipa Botany Pot
    e.custom({ "type": "botanypots:crop", "seed": { "item": "forbidden_arcanus:nipa" }, "categories": ["dirt"], "growthTicks": 600, "display": { "type": "botanypots:aging", "block": "forbidden_arcanus:nipa" }, "drops": [{ "chance": 1.00, "output": { "item": "forbidden_arcanus:arcane_crystal_dust_speck" }, "minRolls": 1, "maxRolls": 1 }] })

    //Seeds of Doubt
    e.custom({ "type": "botanypots:crop", "seed": { "item": "bloodmagic:growing_doubt" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypots:aging", "block": "bloodmagic:creeping_doubt" }, "drops": [{ "chance": 0.20, "output": { "item": "bloodmagic:growing_doubt" }, "minRolls": 1, "maxRolls": 1 }] })

    //Cryo Root
    e.custom({ "type": "botanypots:crop", "seed": { "item": "blue_skies:cryo_root" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypots:aging", "block": "blue_skies:cryo_roots" }, "drops": [{ "chance": 0.20, "output": { "item": "blue_skies:cryo_root" }, "minRolls": 1, "maxRolls": 1 }] })

    //Solnuts
    e.custom({ "type": "botanypots:crop", "seed": { "item": "blue_skies:solnut" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypots:aging", "block": "blue_skies:solnuts" }, "drops": [{ "chance": 0.20, "output": { "item": "blue_skies:solnut" }, "minRolls": 1, "maxRolls": 1 }] })

    //Otherworld Sappling
    e.custom({ "type": "botanypots:crop", "seed": { "item": "occultism:otherworld_sapling" }, "categories": ["dirt"], "growthTicks": 2400, "display": { "block": "occultism:otherworld_sapling" }, "drops": [{ "chance": 1.00, "output": { "item": "occultism:otherworld_log" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.15, "output": { "item": "occultism:otherworld_sapling" } }] })

    //Golden Orchid Seeds Botany Pot Tiers
    e.custom({ "type": "botanypots:soil", "input": { "item": "forbidden_arcanus:magical_farmland" }, "display": { "block": "forbidden_arcanus:magical_farmland" }, "categories": "magical_farmland", "growthModifier": 1 })
    e.custom({ "type": "botanypots:crop", "seed": { "item": "forbidden_arcanus:golden_orchid_seeds" }, "categories": ["magical_farmland"], "growthTicks": 1200, "display": { "type": "botanypots:aging", "block": "forbidden_arcanus:golden_orchid" }, "drops": [{ "chance": 1.00, "output": { "item": "forbidden_arcanus:arcane_gold_nugget" }, "minRolls": 1, "maxRolls": 3 }, { "chance": 0.15, "output": { "item": "forbidden_arcanus:arcane_gold_nugget" }, "minRolls": 1, "maxRolls": 3 }, { "chance": 0.05, "output": { "item": "forbidden_arcanus:golden_orchid_seeds" }, "minRolls": 1, "maxRolls": 2 }] })

    //Flashing Archwood Sappling
    e.custom({ "type": "botanypots:crop", "seed": { "item": "ars_elemental:yellow_archwood_sapling" }, "categories": ["dirt"], "growthTicks": 2400, "display": { "block": "ars_elemental:yellow_archwood_sapling" }, "drops": [{ "chance": 1.00, "output": { "item": "ars_elemental:yellow_archwood_log" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.01, "output": { "item": "ars_elemental:yellow_archwood_sapling" } }] })

    //Botany pot Tier
    function soilPottier(block, categories, growth) {
        e.custom({ "type": "botanypotstiers:soil", "input": { "item": block }, "display": { "block": block }, "categories": categories, "growthModifier": growth })
    }
    soilPottier('quark:red_corundum', 'red_corundum', 1)
    soilPottier('quark:orange_corundum', 'orange_corundum', 1)
    soilPottier('quark:yellow_corundum', 'yellow_corundum', 1)
    soilPottier('quark:green_corundum', 'green_corundum', 1)
    soilPottier('quark:blue_corundum', 'blue_corundum', 1)
    soilPottier('quark:indigo_corundum', 'indigo_corundum', 1)
    soilPottier('quark:violet_corundum', 'violet_corundum', 1)
    soilPottier('quark:white_corundum', 'white_corundum', 1)
    soilPottier('quark:black_corundum', 'black_corundum', 1)
    soilPottier('mysticalagradditions:neutronium_crux', 'neutronium_crux', 3)
    soilPottier('mysticalagradditions:awakened_draconium_crux', 'awakened_draconium_crux', 3)
    soilPottier('mysticalagradditions:gaia_spirit_crux', 'gaia_spirit_crux', 3)
    soilPottier('mysticalagradditions:dragon_egg_crux', 'dragon_egg_crux', 3)
    soilPottier('mysticalagradditions:nether_star_crux', 'nether_star_crux', 3)
    soilPottier('ragnamod_seven:infinity_crux', 'infinity_crux', 3)
    soilPottier('ragnamod_seven:antimatter_crux', 'antimatter_crux', 3)
    soilPottier('ragnamod_seven:chaotic_crux', 'chaotic_crux', 3)
    soilPottier('ragnamod_seven:alfsteel_crux', 'alfsteel_crux', 3)
    soilPottier('mysticalagradditions:nitro_crystal_crux', 'nitro_crystal_crux', 3)

    function corumudmtier(colortier) { e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "quark:" + colortier + "_corundum_cluster" }, "categories": [colortier + "_corundum"], "growthTicks": 600, "display": { "type": "botanypotstiers:simple", "block": "quark:" + colortier + "_corundum_cluster" }, "drops": [{ "chance": 1.00, "output": { "item": "quark:" + colortier + "_corundum_cluster" }, "minRolls": 1, "maxRolls": 2 }, { "chance": 1.00, "output": { "item": "quark:" + colortier + "_corundum" }, "minRolls": 1, "maxRolls": 2 }] }) }
    var colortier = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
    colortier.forEach(C => { corumudmtier(C) })

    //Nipa Botany Pot Tiers
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "forbidden_arcanus:nipa" }, "categories": ["dirt"], "growthTicks": 600, "display": { "type": "botanypotstiers:aging", "block": "forbidden_arcanus:nipa" }, "drops": [{ "chance": 1.00, "output": { "item": "forbidden_arcanus:arcane_crystal_dust_speck" }, "minRolls": 1, "maxRolls": 1 }] })

    //Seeds of Doubt
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "bloodmagic:growing_doubt" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypotstiers:aging", "block": "bloodmagic:creeping_doubt" }, "drops": [{ "chance": 1.0, "output": { "item": "bloodmagic:growing_doubt" }, "minRolls": 1, "maxRolls": 1 }] })

    //Cryo Root
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "blue_skies:cryo_root" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypotstiers:aging", "block": "blue_skies:cryo_roots" }, "drops": [{ "chance": 0.20, "output": { "item": "blue_skies:cryo_root" }, "minRolls": 1, "maxRolls": 1 }] })

    //Solnuts
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "blue_skies:solnut" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypotstiers:aging", "block": "blue_skies:solnuts" }, "drops": [{ "chance": 0.20, "output": { "item": "blue_skies:solnut" }, "minRolls": 1, "maxRolls": 1 }] })

    //Otherworld Sappling Pot Tiers
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "occultism:otherworld_sapling" }, "categories": ["dirt"], "growthTicks": 2400, "display": { "block": "occultism:otherworld_sapling" }, "drops": [{ "chance": 1.00, "output": { "item": "occultism:otherworld_log" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.15, "output": { "item": "occultism:otherworld_sapling" } }] })

    //Golden Orchid Seeds Botany Pot Tiers
    e.custom({ "type": "botanypotstiers:soil", "input": { "item": "forbidden_arcanus:magical_farmland" }, "display": { "block": "forbidden_arcanus:magical_farmland" }, "categories": "magical_farmland", "growthModifier": 1 })
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "forbidden_arcanus:golden_orchid_seeds" }, "categories": ["magical_farmland"], "growthTicks": 1200, "display": { "type": "botanypotstiers:aging", "block": "forbidden_arcanus:golden_orchid" }, "drops": [{ "chance": 1.00, "output": { "item": "forbidden_arcanus:arcane_gold_nugget" }, "minRolls": 1, "maxRolls": 3 }, { "chance": 0.15, "output": { "item": "forbidden_arcanus:arcane_gold_nugget" }, "minRolls": 1, "maxRolls": 3 }, { "chance": 0.05, "output": { "item": "forbidden_arcanus:golden_orchid_seeds" }, "minRolls": 1, "maxRolls": 2 }] })

    //Flashing Archwood Sappling
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "ars_elemental:yellow_archwood_sapling" }, "categories": ["dirt"], "growthTicks": 2400, "display": { "block": "ars_elemental:yellow_archwood_sapling" }, "drops": [{ "chance": 1.00, "output": { "item": "ars_elemental:yellow_archwood_log" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.01, "output": { "item": "ars_elemental:yellow_archwood_sapling" } }] })

    //Mystical
    function mysticalagricultureSeed(name) {
        e.custom({ "type": "botanypots:crop", "seed": { "item": "mysticalagriculture:" + name + "_seeds" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypots:aging", "block": "mysticalagriculture:" + name + "_crop" }, "drops": [{ "chance": 1, "output": { "item": "mysticalagriculture:" + name + "_essence" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.05, "output": { "item": "mysticalagriculture:fertilized_essence" }, "minRolls": 1, "maxRolls": 2 }] })
        e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "mysticalagriculture:" + name + "_seeds" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypotstiers:aging", "block": "mysticalagriculture:" + name + "_crop" }, "drops": [{ "chance": 1, "output": { "item": "mysticalagriculture:" + name + "_essence" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.05, "output": { "item": "mysticalagriculture:fertilized_essence" }, "minRolls": 1, "maxRolls": 2 }] })
    }
    function mysticalagricultureSeedCrux(name, soil) {
        e.custom({ "type": "botanypots:crop", "seed": { "item": "mysticalagriculture:" + name + "_seeds" }, "categories": [soil], "growthTicks": 800, "display": { "type": "botanypots:aging", "block": "mysticalagriculture:" + name + "_crop" }, "drops": [{ "chance": 1, "output": { "item": "mysticalagriculture:" + name + "_essence" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.05, "output": { "item": "mysticalagriculture:fertilized_essence" }, "minRolls": 1, "maxRolls": 2 }] })
        e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "mysticalagriculture:" + name + "_seeds" }, "categories": [soil], "growthTicks": 800, "display": { "type": "botanypotstiers:aging", "block": "mysticalagriculture:" + name + "_crop" }, "drops": [{ "chance": 1, "output": { "item": "mysticalagriculture:" + name + "_essence" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.05, "output": { "item": "mysticalagriculture:fertilized_essence" }, "minRolls": 1, "maxRolls": 2 }] })
    }
    e.custom({ "type": "botanypots:crop", "seed": { "item": "mysticalagriculture:insanium_seeds" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypots:aging", "block": "mysticalagriculture:insanium_crop" }, "drops": [{ "chance": 1, "output": { "item": "mysticalagradditions:insanium_essence" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.05, "output": { "item": "mysticalagriculture:fertilized_essence" }, "minRolls": 1, "maxRolls": 2 }] })

    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "mysticalagriculture:insanium_seeds" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypotstiers:aging", "block": "mysticalagriculture:insanium_crop" }, "drops": [{ "chance": 1, "output": { "item": "mysticalagradditions:insanium_essence" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.05, "output": { "item": "mysticalagriculture:fertilized_essence" }, "minRolls": 1, "maxRolls": 2 }] })

    var nameSeedMystical = ["air", "fire", "water", "earth", "inferium", "stone", "dirt", "wood", "ice", "deepslate", "chicken", "pig", "amethyst", "honey", "coral", "coal", "nether", "dye", "nature", "menril", "limestone", "mystical_flower", "apatite", "saltpeter", "aluminum", "sulfur", "silicon", "rubber", "turtle", "slime", "fish", "squid", "sheep", "cow", "skeleton", "zombie", "prismarine", "obsidian", "redstone", "glowstone", "nether_quartz", "copper", "iron", "certus_quartz", "sky_stone", "ironwood", "steeleaf", "manasteel", "pig_iron", "slimesteel", "amethyst_bronze", "basalz", "blitz", "blizz", "lead", "silver", "brass", "zinc", "bronze", "tin", "rabbit", "spider", "creeper", "dark_gem", "cyber_steel", "crusteel", "cloggrum", "cinnabar", "chorus_metal", "blazing_copper", "baolian", "aquite", "sculk", "red_beryl", "qivium", "pyrope", "plastic", "piroot", "magma_steel", "lavium", "kepu", "hureaulite", "horizonite", "gelot", "gausum", "galu", "froststeel", "forgotten", "flux_infused", "felsteel", "falsite", "fairy", "epidote", "energy_crystal", "emeraldite", "electrical_copper", "durasteel", "duralium", "dragonsteel", "yokel", "wavy", "ventium", "source_gem", "nickel", "steel", "enderman", "ghast", "blaze", "experience", "end", "lapis_lazuli", "gold", "blazing_crystal", "energized_steel", "fluix", "compressed_iron", "fiery_ingot", "knightmetal", "refined_obsidian", "refined_glowstone", "fluorite", "osmium", "elementium", "rose_gold", "cobalt", "hop_graphite", "lumium", "signalum", "uranium", "invar", "electrum", "constantan", "regalium", "pendorite", "ostrum", "diopside", "desh", "calorite", "arcane_gold", "arcane_crystal", "ametrine", "twinite", "soul_infused", "shellite", "rune", "hepatizon", "queens_slime", "manyullyn", "enderium", "iridium", "wither_skeleton", "netherite", "emerald", "diamond", "uraninite", "spirited_crystal", "niotic_crystal", "draconium", "terrasteel", "utheric", "iesnium", "demonite", "decay", "charoite", "prudentium", "tertium", "imperium", "supremium"]
    nameSeedMystical.forEach(N => { mysticalagricultureSeed(N) })
    mysticalagricultureSeedCrux("neutronium", 'neutronium_crux')
    mysticalagricultureSeedCrux("awakened_draconium", 'awakened_draconium_crux')
    mysticalagricultureSeedCrux("gaia_spirit", 'gaia_spirit_crux')
    mysticalagricultureSeedCrux("dragon_egg", 'dragon_egg_crux')
    mysticalagricultureSeedCrux("nether_star", 'nether_star_crux')
    mysticalagricultureSeedCrux("infinity", 'infinity_crux')
    mysticalagricultureSeedCrux("antimatter", 'antimatter_crux')
    mysticalagricultureSeedCrux("chaotic", 'chaotic_crux')
    mysticalagricultureSeedCrux("alfsteel", 'alfsteel_crux')
    mysticalagricultureSeedCrux("nitro_crystal", 'nitro_crystal_crux')

    function botanyPotCraft(block) {
        e.shapeless('botanypots:' + block + '_hopper_botany_pot', ['#botanypots:basic_hopper_botany_pot', 'minecraft:' + block])
        e.shapeless('botanypotstiers:elite_' + block + '_hopper_botany_pot', ['#botanypotstiers:elite_hopper_botany_pot', 'minecraft:' + block])
        e.shapeless('botanypotstiers:ultra_' + block + '_hopper_botany_pot', ['#botanypotstiers:ultra_hopper_botany_pot', 'minecraft:' + block])
        e.shapeless('botanypotstiers:creative_' + block + '_hopper_botany_pot', ['#botanypotstiers:creative_hopper_botany_pot', 'minecraft:' + block])
        e.shapeless('botanypots:' + block + '_botany_pot', ['#botanypots:basic_botany_pot', 'minecraft:' + block])
        e.shapeless('botanypotstiers:elite_' + block + '_botany_pot', ['#botanypotstiers:elite_botany_pot', 'minecraft:' + block])
        e.shapeless('botanypotstiers:ultra_' + block + '_botany_pot', ['#botanypotstiers:ultra_botany_pot', 'minecraft:' + block])
        e.shapeless('botanypotstiers:creative_' + block + '_botany_pot', ['#botanypotstiers:creative_botany_pot', 'minecraft:' + block])
    }
    var blocksMinecraft = ['white_glazed_terracotta', 'orange_glazed_terracotta', 'magenta_glazed_terracotta', 'light_blue_glazed_terracotta', 'yellow_glazed_terracotta', 'lime_glazed_terracotta', 'pink_glazed_terracotta', 'gray_glazed_terracotta', 'light_gray_glazed_terracotta', 'cyan_glazed_terracotta', 'purple_glazed_terracotta', 'blue_glazed_terracotta', 'brown_glazed_terracotta', 'green_glazed_terracotta', 'red_glazed_terracotta', 'black_glazed_terracotta', 'white_concrete', 'orange_concrete', 'magenta_concrete', 'light_blue_concrete', 'yellow_concrete', 'lime_concrete', 'pink_concrete', 'gray_concrete', 'black_terracotta', 'red_terracotta', 'green_terracotta', 'brown_terracotta', 'blue_terracotta', 'purple_terracotta', 'cyan_terracotta', 'light_gray_terracotta', 'white_terracotta', 'orange_terracotta', 'magenta_terracotta', 'light_blue_terracotta', 'yellow_terracotta', 'lime_terracotta', 'pink_terracotta', 'gray_terracotta', 'black_concrete', 'red_concrete', 'green_concrete', 'brown_concrete', 'blue_concrete', 'purple_concrete', 'cyan_concrete', 'light_gray_concrete']
    blocksMinecraft.forEach(B => { botanyPotCraft(B) })
    e.shapeless('botanypots:terracotta_hopper_botany_pot', ['#botanypots:basic_hopper_botany_pot', 'minecraft:terracotta'])
    e.shapeless('botanypotstiers:elite_terracotta_hopper_botany_pot', ['#botanypotstiers:elite_hopper_botany_pot', 'minecraft:terracotta'])
    e.shapeless('botanypotstiers:ultra_terracotta_hopper_botany_pot', ['#botanypotstiers:ultra_hopper_botany_pot', 'minecraft:terracotta'])
    e.shapeless('botanypotstiers:creative_terracotta_hopper_botany_pot', ['#botanypotstiers:creative_hopper_botany_pot', 'minecraft:terracotta'])
    e.shapeless('botanypots:terracotta_botany_pot', ['#botanypots:basic_botany_pot', 'minecraft:terracotta'])
    e.shapeless('botanypotstiers:elite_terracotta_botany_pot', ['#botanypotstiers:elite_botany_pot', 'minecraft:terracotta'])
    e.shapeless('botanypotstiers:ultra_terracotta_botany_pot', ['#botanypotstiers:ultra_botany_pot', 'minecraft:terracotta'])
    e.shapeless('botanypotstiers:creative_terracotta_botany_pot', ['#botanypotstiers:creative_botany_pot', 'minecraft:terracotta'])
})