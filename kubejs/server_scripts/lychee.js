onEvent('recipes', e => {

    //Edelwood Saplings
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "forbidden_arcanus:arcane_crystal_dust"
        },
        "block_in": "#minecraft:saplings",
        "post": [
            {
                "type": "place",
                "block": "forbidden_arcanus:growing_edelwood"
            }
        ]
    })

    //Dark Runes
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "forbidden_arcanus:rune"
        },
        "block_in": "forbidden_arcanus:dark_nether_star_block",
        "post": [
            {
                "type": "drop_item",
                "item": "forbidden_arcanus:dark_rune"
            }
        ]
    })

    //Liveroot
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "minecraft:emerald"
        },
        "block_in": "twilightforest:root",
        "post": [
            {
                "type": "place",
                "block": "twilightforest:liveroot_block"
            }
        ]
    })

    //Blood Magic Rune
    function cleanRune(rune) {
        e.custom(
            {
                "type": "lychee:item_inside",
                "item_in": {
                    "item": rune
                },
                "block_in": {
                    "blocks": ["water"],
                    "state": {
                        "level": 0
                    }
                },
                "post": [
                    {
                        "type": "drop_item",
                        "item": "bloodmagic:blankrune"
                    }
                ]
            }
        )
    }
    var rune = ['bloodmagic:chargingrune', 'bloodmagic:accelerationrune', 'bloodmagic:orbcapacityrune', 'bloodmagic:bettercapacityrune', 'bloodmagic:altarcapacityrune', 'bloodmagic:dislocationrune', 'bloodmagic:selfsacrificerune', 'bloodmagic:sacrificerune', 'bloodmagic:speedrune']
    rune.forEach(R => { cleanRune(R) })

    //Seeds of Doubt
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "bloodmagic:demonitegravel"
        },
        "block_in": "bloodmagic:strong_tau",
        "state": {
            "age": 7
        },
        "post": [
            {
                "type": "place",
                "block": "bloodmagic:creeping_doubt",
                "state": {
                    "age": 7
                }
            }
        ]
    })

    //Pebbles
    function pebble(block, output, chance) { e.custom({ "type": "lychee:block_interacting", "contextual": [{ "type": "is_sneaking" }], "item_in": { "item": "air" }, "block_in": block, "post": [{ "type": "drop_item", "item": output, "contextual": { "type": "chance", "chance": chance } }] }) }
    //Blackstone
    pebble('minecraft:blackstone', 'ragnamod_seven:blackstone_pebble', 0.8)
    pebble('minecraft:andesite', 'ragnamod_seven:andesite_pebble', 0.8)
    pebble('minecraft:tuff', 'ragnamod_seven:tuff_pebble', 0.8)
    pebble('minecraft:granite', 'ragnamod_seven:granite_pebble', 0.8)
    pebble('minecraft:dripstone_block', 'ragnamod_seven:dripstone_pebble', 0.8)
    pebble('minecraft:diorite', 'ragnamod_seven:diorite_pebble', 0.8)
    pebble('minecraft:stone', 'ragnamod_seven:stone_pebble', 0.8)
    pebble('minecraft:calcite', 'ragnamod_seven:calcite_pebble', 0.8)
    pebble('minecraft:basalt', 'ragnamod_seven:basalt_pebble', 0.8)
    pebble('minecraft:deepslate', 'ragnamod_seven:deepslate_pebble', 0.8)

    e.custom({ "type": "lychee:block_interacting", "contextual": [{ "type": "is_sneaking" }], "item_in": { "item": "air" }, "block_in": '#minecraft:dirt', "post": [{ "type": "drop_item", "item": 'ragnamod_seven:stone_pebble', "contextual": { "type": "chance", "chance": 0.6 } }, { "type": "drop_item", "item": 'ragnamod_seven:andesite_pebble', "contextual": { "type": "chance", "chance": 0.6 } }, { "type": "drop_item", "item": 'ragnamod_seven:granite_pebble', "contextual": { "type": "chance", "chance": 0.6 } }, { "type": "drop_item", "item": 'ragnamod_seven:diorite_pebble', "contextual": { "type": "chance", "chance": 0.6 } }, { "type": "drop_item", "item": 'ragnamod_seven:powdered_dirt', "contextual": { "type": "chance", "chance": 0.4 } }] })

    //Rack Dirt
    e.custom({
        "type": "lychee:block_interacting",
        "contextual": [{ "type": "is_sneaking" }],
        "item_in": { "item": "ragnamod_seven:rack" },
        "block_in": '#minecraft:dirt',
        "post": [
            {
                "type": "random", "rolls": { "min": 1, "max": 2 },
                "entries": [
                    { "type": "drop_item", "item": "ragnamod_seven:spruce_seed", "contextual": { "type": "chance", "chance": 0.1 } },
                    { "type": "drop_item", "item": "ragnamod_seven:oak_seed", "contextual": { "type": "chance", "chance": 0.1 } },
                    { "type": "drop_item", "item": "ragnamod_seven:jungle_seed", "contextual": { "type": "chance", "chance": 0.1 } },
                    { "type": "drop_item", "item": "ragnamod_seven:dark_oak_seed", "contextual": { "type": "chance", "chance": 0.1 } },
                    { "type": "drop_item", "item": "ragnamod_seven:runewood_seed", "contextual": { "type": "chance", "chance": 0.1 } },
                    { "type": "drop_item", "item": "ragnamod_seven:birch_seed", "contextual": { "type": "chance", "chance": 0.1 } },
                    { "type": "drop_item", "item": "ragnamod_seven:acacia_seed", "contextual": { "type": "chance", "chance": 0.1 } }
                ]
            },
            { "type": "place", "block": "air", "contextual": { "type": "chance", "chance": 0.1 } }, { "type": "damage_item" }
        ]
    })

    //Seeds
    function seed(input, block, output, offset) { e.custom({ "type": "lychee:block_interacting", "item_in": { "item": input }, "block_in": block, "post": [{ "type": "place", "offsetY": offset, "block": output }] }) }
    function seedWaterloged(input, output) { e.custom({ "type": "lychee:item_inside", "item_in": { "item": input }, "block_in": { "blocks": ["water"], "state": { "level": 0 } }, "post": [{ "type": "place", "block": output, "state": { "waterlogged": "true" } }] }) }
    seed('ragnamod_seven:acacia_seed', '#minecraft:dirt', 'minecraft:acacia_sapling', 1)
    seed('ragnamod_seven:birch_seed', '#minecraft:dirt', 'minecraft:birch_sapling', 1)
    seed('ragnamod_seven:runewood_seed', '#minecraft:dirt', 'malum:runewood_sapling', 1)
    seed('ragnamod_seven:dark_oak_seed', '#minecraft:dirt', 'minecraft:dark_oak_sapling', 1)
    seed('ragnamod_seven:jungle_seed', '#minecraft:dirt', 'minecraft:jungle_sapling', 1)
    seed('ragnamod_seven:oak_seed', '#minecraft:dirt', 'minecraft:oak_sapling', 1)
    seed('ragnamod_seven:spruce_seed', '#minecraft:dirt', 'minecraft:spruce_sapling', 1)
    seed('ragnamod_seven:bamboo_seeds', '#minecraft:dirt', 'minecraft:bamboo_sapling', 1)
    seed('ragnamod_seven:sugarcane_seeds', '#forge:sand', 'minecraft:sugar_cane', 1)
    seed('ragnamod_seven:cactus_seeds', '#forge:sand', 'minecraft:cactus', 1)
    seed('ragnamod_seven:potato_seeds', 'minecraft:farmland', 'minecraft:potatoes', 1)
    seed('ragnamod_seven:carrot_seeds', 'minecraft:farmland', 'minecraft:carrots', 1)
    seedWaterloged('ragnamod_seven:kelp_seed', 'minecraft:kelp')
    seedWaterloged('ragnamod_seven:pickle_seed', 'minecraft:sea_pickle')

    //Dirt to Blighted Earth
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "malum:blighted_gunk"
        },
        "block_in": "minecraft:dirt",
        "post": [
            {
                "type": "place",
                "block": "malum:blighted_earth"
            }
        ]
    })
    //Dirt to Grass
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "ragnamod_seven:grass_seeds"
        },
        "block_in": "minecraft:dirt",
        "post": [
            {
                "type": "place",
                "block": "minecraft:grass_block"
            }
        ]
    })
    //Malignant Flesh Veins
    e.custom({
        "type": "lychee:block_interacting",
        "contextual": [{ "type": "is_sneaking" }],
        "item_in": { "tag": 'forge:shears' },
        "block_in": 'biomancy:malignant_flesh',
        "post": [
            {
                "type": "random", "rolls": { "min": 1, "max": 1 },
                "entries": [
                    { "type": "drop_item", "item": "biomancy:malignant_flesh_veins", "contextual": { "type": "chance", "chance": 1.0 } }
                ]
            },
            { "type": "place", "block": "air", "contextual": { "type": "chance", "chance": 0.05 } }, { "type": "damage_item" }
        ]
    })
})