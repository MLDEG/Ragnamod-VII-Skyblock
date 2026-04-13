// priority: 1

onEvent('recipes', e => {

    //Questionable Mixture
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "ftbic:scrap" },
            { "fluid": "bloodmagic:doubt_fluid", "amount": 1000 }
        ],
        "results": [
            {
                "item": "ragnamod_seven:questionable_mixture"
            }
        ],
        "heatRequirement": "superheated",
    })
    //Strange Mixture
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "ftbic:scrap" },
            { "fluid": "bloodmagic:doubt_fluid", "amount": 1000 }
        ],
        "results": [
            {
                "item": "ragnamod_seven:strange_mixture"
            }
        ],
        "heatRequirement": "superheated",
    })
    //Sickening Mixture
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "ftbic:scrap" },
            { "fluid": "bloodmagic:doubt_fluid", "amount": 1000 }
        ],
        "results": [
            {
                "item": "ragnamod_seven:sickening_mixture"
            }
        ],
        "heatRequirement": "superheated",
    })
    //Unpredictable Dust
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "ragnamod_seven:questionable_mixture" },
            { "item": "ragnamod_seven:strange_mixture" },
            { "item": "ragnamod_seven:sickening_mixture" },
            { "item": "draconicevolution:awakened_draconium_dust" },
            { "fluid": "chemlib:krypton_fluid", "amount": 1000 }
        ],
        "results": [
            {
                "item": "ragnamod_seven:unpredictable_dust"
            }
        ]
    })
    //Cake Batter
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "fluid": "minecraft:milk", "amount": 250 },
            { "item": "create:wheat_flour" },
            { "item": "create:wheat_flour" },
            { "item": "minecraft:sugar" },
            { "fluid": "kubejs:egg_yolk", "amount": 250 }
        ],
        "results": [
            { "fluid": "kubejs:cake_batter", "amount": 500 }
        ]
    })
    //BATTERS
    //Cake Batter
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "tconstruct:ender_slime_ball" }],
        "results": [{ "fluid": "kubejs:ender_cake_batter", "amount": 250 }]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "minecraft:slime_ball" }],
        "results": [{ "fluid": "kubejs:earth_cake_batter", "amount": 250 }]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "tconstruct:sky_slime_ball" }],
        "results": [{ "fluid": "kubejs:sky_cake_batter", "amount": 250 }]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "tconstruct:blood_slime_ball" }],
        "results": [{ "fluid": "kubejs:blood_cake_batter", "amount": 250 }]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "minecraft:magma_cream" }],
        "results": [{ "fluid": "kubejs:magma_cake_batter", "amount": 250 }]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "minecraft:soul_soil" }],
        "results": [{ "fluid": "kubejs:nether_cake_batter", "amount": 250 }]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "minecraft:obsidian" }],
        "results": [{ "fluid": "kubejs:end_cake_batter", "amount": 250 }]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "minecraft:dirt" }],
        "results": [{ "fluid": "kubejs:overworld_cake_batter", "amount": 250 }]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "twilightforest:liveroot" }],
        "results": [{ "fluid": "kubejs:twilight_cake_batter", "amount": 250 }]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "minecraft:diamond_block" }],
        "results": [{ "fluid": "kubejs:mining_cake_batter", "amount": 250 }]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:cake_batter", "amount": 250 }, { "item": "undergarden:depthrock" }],
        "results": [{ "fluid": "kubejs:undergarden_cake_batter", "amount": 250 }]
    })
})