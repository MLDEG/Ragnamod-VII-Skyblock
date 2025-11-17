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

    e.custom({ "type": "lychee:block_interacting", "contextual": [{ "type": "is_sneaking" }], "item_in": { "item": "air" }, "block_in": '#minecraft:dirt', "post": [{ "type": "drop_item", "item": 'ragnamod_seven:stone_pebble', "contextual": { "type": "chance", "chance": 0.8 } }, { "type": "drop_item", "item": 'ragnamod_seven:andesite_pebble', "contextual": { "type": "chance", "chance": 0.8 } }, { "type": "drop_item", "item": 'ragnamod_seven:granite_pebble', "contextual": { "type": "chance", "chance": 0.8 } }, { "type": "drop_item", "item": 'ragnamod_seven:diorite_pebble', "contextual": { "type": "chance", "chance": 0.8 } }] })

})