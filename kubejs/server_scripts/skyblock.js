onEvent('recipes', e => {

    //Dirt
    e.shapeless('minecraft:dirt', ['ragnamod_seven:powdered_dirt', 'ragnamod_seven:powdered_dirt', 'ragnamod_seven:powdered_dirt', 'ragnamod_seven:powdered_dirt'])
    //Stone Alloy
    e.shapeless('ragnamod_seven:stone_alloy', ['ragnamod_seven:andesite_pebble', 'ragnamod_seven:stone_pebble', 'ragnamod_seven:diorite_pebble', 'ragnamod_seven:granite_pebble'])
    //Blighted Earth
    e.shaped('malum:blighted_earth', ['AAA', 'ABA', 'AAA'], { A: 'ragnamod_seven:powdered_dirt', B: 'malum:blighted_gunk' })
    //Crook
    e.shaped('exnihilosequentia:stone_crook', ['AA', ' A', ' A'], { A: 'ragnamod_seven:stone_pebble' })
    //Rack
    e.shaped('ragnamod_seven:rack', [' AA', ' BA', 'B  '], { A: 'ragnamod_seven:stone_pebble', B: 'minecraft:stick' })
    //Sifter
    e.shaped('createsifter:sifter', ['ABA', 'ACA', 'DDD'], { A: 'malum:runewood_panel', B: 'quark:chute', C: 'create:cogwheel', D: 'minecraft:polished_andesite' })
    //Cogwheel
    e.shaped('create:cogwheel', [' A ', 'ABA', ' A '], { A: '#minecraft:planks', B: 'ragnamod_seven:stone_alloy' })
    //Crank
    e.shaped('create:hand_crank', ['AAA', '  B'], { A: '#minecraft:planks', B: 'ragnamod_seven:stone_alloy' })
    //Blighted Soill
    e.shaped('malum:blighted_soil', ['AA', 'AA'], { A: 'malum:blighted_gunk' })
    //Pebble into block
    e.shaped('minecraft:granite', ['AA', 'AA'], { A: 'ragnamod_seven:granite_pebble' })
    e.shaped('minecraft:cobblestone', ['AA', 'AA'], { A: 'ragnamod_seven:stone_pebble' })
    e.shaped('minecraft:andesite', ['AA', 'AA'], { A: 'ragnamod_seven:andesite_pebble' })
    e.shaped('minecraft:diorite', ['AA', 'AA'], { A: 'ragnamod_seven:diorite_pebble' })
    e.shaped('minecraft:cobbled_deepslate', ['AA', 'AA'], { A: 'ragnamod_seven:deepslate_pebble' })
    e.shaped('minecraft:basalt', ['AA', 'AA'], { A: 'ragnamod_seven:basalt_pebble' })
    e.shaped('minecraft:calcite', ['AA', 'AA'], { A: 'ragnamod_seven:calcite_pebble' })
    e.shaped('minecraft:dripstone_block', ['AA', 'AA'], { A: 'ragnamod_seven:dripstone_pebble' })
    e.shaped('minecraft:blackstone', ['AA', 'AA'], { A: 'ragnamod_seven:blackstone_pebble' })
    e.shaped('minecraft:tuff', ['AA', 'AA'], { A: 'ragnamod_seven:tuff_pebble' })
    //Rooted Dirt
    e.shaped('minecraft:rooted_dirt', [' A ', 'ABA', ' A '], { A: 'rootsclassic:old_root', B: 'minecraft:dirt' })
    //Golden Scythe
    e.shaped('ragnamod_seven:golden_scythe', ['AAB', ' CA', 'C  '], { A: 'minecraft:gold_ingot', B: 'malum:processed_soulstone', C: 'minecraft:stick' })
    //Dust with Malum
    e.custom({ "type": "malum:spirit_transmutation", "input": { "item": "minecraft:sand" }, "output": { "item": "exnihilosequentia:dust" } })
    e.custom({ "type": "malum:spirit_transmutation", "input": { "item": "exnihilosequentia:dust" }, "output": { "item": "malum:blighted_soil" } })
    //Dust with Create
    e.custom({ "type": "create:milling", "ingredients": [{ "item": "minecraft:sand" }], "results": [{ "item": "exnihilosequentia:dust", "count": 1 }], "processingTime": 100 })
    //Mesh
    e.shaped('createsifter:string_mesh', ['ABA', 'BAB', 'ABA'], { A: 'minecraft:string', B: 'malum:runewood_planks' })
    e.shaped('createsifter:andesite_mesh', ['ABA', 'BCB', 'ABA'], { A: Item.of('tconstruct:tool_binding', '{Material:"tconstruct:flint"}'), B: 'malum:runewood_planks', C: 'createsifter:string_mesh' })
    e.shaped('createsifter:zinc_mesh', ['ABA', 'BCB', 'ABA'], { A: 'createaddition:iron_wire', B: 'malum:runewood_planks', C: 'createsifter:andesite_mesh' })
    e.shaped('createsifter:brass_mesh', ['ABA', 'BCB', 'ABA'], { A: 'ftbic:gold_wire', B: 'malum:runewood_planks', C: 'createsifter:zinc_mesh' })
    e.shaped('createsifter:custom_mesh', ['ABA', 'BCB', 'ABA'], { A: 'avaritia:diamond_lattice', B: 'malum:runewood_planks', C: 'createsifter:brass_mesh' })

    /****************CREATE SIFTER****************/
    /****************STING****************/
    //Dirt
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:dirt" }, { "item": "createsifter:string_mesh" }],
        "results": [
            { "item": "ragnamod_seven:grass_seeds", "chance": 0.1 },
            { "item": "ragnamod_seven:carrot_seeds", "chance": 0.2 },
            { "item": "ragnamod_seven:potato_seeds", "chance": 0.2 },
            { "item": "minecraft:wheat_seeds", "chance": 0.3 },
            { "item": "minecraft:pumpkin_seeds", "chance": 0.3 },
            { "item": "minecraft:melon_seeds", "chance": 0.3 },
            { "item": "minecraft:beetroot_seeds", "chance": 0.3 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:dirt" }, { "item": "createsifter:string_mesh" }],
        "results": [
            { "item": "byg:warped_coral", "chance": 0.1 },
            { "item": "minecraft:tube_coral", "chance": 0.1 },
            { "item": "minecraft:brain_coral", "chance": 0.1 },
            { "item": "minecraft:bubble_coral", "chance": 0.1 },
            { "item": "minecraft:fire_coral", "chance": 0.1 },
            { "item": "minecraft:horn_coral", "chance": 0.1 },
            { "item": "ragnamod_seven:kelp_seed", "chance": 0.3 },
            { "item": "ragnamod_seven:pickle_seed", "chance": 0.3 }
        ],
        "processingTime": 200,
        "waterlogged": true
    })
    //Sand
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:sand" }, { "item": "createsifter:string_mesh" }],
        "results": [
            { "item": "ragnamod_seven:cactus_seeds", "chance": 0.1 },
            { "item": "ragnamod_seven:bamboo_seeds", "chance": 0.1 },
            { "item": "ragnamod_seven:sugarcane_seeds", "chance": 0.1 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Rooted Dirt
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:rooted_dirt" }, { "item": "createsifter:string_mesh" }],
        "results": [
            { "item": "rootsclassic:old_root", "chance": 0.2 },
            { "item": "minecraft:hanging_roots", "chance": 0.3 },
            { "item": "botania:living_root", "chance": 0.4 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Blighted Soil
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "malum:blighted_soil" }, { "item": "createsifter:string_mesh" }],
        "results": [
            { "item": "minecraft:gold_nugget", "chance": 0.80 },
            { "item": "malum:processed_soulstone", "chance": 0.25 }
        ],
        "processingTime": 100,
        "waterlogged": false
    })
    /****************Flint****************/
    //Gravel
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:gravel" }, { "item": "createsifter:andesite_mesh" }],
        "results": [
            { "item": "create:experience_nugget", "chance": 0.02 },
            { "item": "minecraft:flint", "chance": 0.3 },
            { "item": "malum:coal_fragment", "chance": 0.4 },
            { "item": "minecraft:lapis_lazuli", "chance": 0.1 },
            { "item": "create:zinc_nugget", "chance": 0.35 },
            { "item": "minecraft:gold_nugget", "chance": 0.35 },
            { "item": "minecraft:iron_nugget", "chance": 0.35 },
            { "item": "create:copper_nugget", "chance": 0.35 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Sand
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:sand" }, { "item": "createsifter:andesite_mesh" }],
        "results": [
            { "item": "supercircuitmaker:tiny_redstone", "chance": 0.2 },
            { "item": "thermal:tin_nugget", "chance": 0.1 },
            { "item": "thermal:lead_nugget", "chance": 0.1 },
            { "item": "thermal:silver_nugget", "chance": 0.1 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Dust
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "exnihilosequentia:dust" }, { "item": "createsifter:andesite_mesh" }],
        "results": [
            { "item": "minecraft:bone_meal", "chance": 0.3 },
            { "item": "thermal:nickel_nugget", "chance": 0.1 },
            { "item": "tinkers_reforged:aluminum_nugget", "chance": 0.1 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Blighted Soil
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "malum:blighted_soil" }, { "item": "createsifter:andesite_mesh" }],
        "results": [
            { "item": "minecraft:gold_nugget", "chance": 0.85 },
            { "item": "malum:processed_soulstone", "chance": 0.35 },
            { "item": "malum:chunk_of_brilliance", "chance": 0.05 }
        ],
        "processingTime": 100,
        "waterlogged": false
    })
    /****************Iron****************/
    //Gravel
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:gravel" }, { "item": "createsifter:zinc_mesh" }],
        "results": [
            { "item": "create:experience_nugget", "chance": 0.2 },
            { "item": "minecraft:flint", "chance": 0.4 },
            { "item": "malum:coal_fragment", "chance": 0.6 },
            { "item": "minecraft:lapis_lazuli", "chance": 0.2 },
            { "item": "create:zinc_nugget", "chance": 0.50 },
            { "item": "minecraft:gold_nugget", "chance": 0.50 },
            { "item": "minecraft:iron_nugget", "chance": 0.50 },
            { "item": "create:copper_nugget", "chance": 0.50 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Sand
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:sand" }, { "item": "createsifter:zinc_mesh" }],
        "results": [
            { "item": "supercircuitmaker:tiny_redstone", "chance": 0.4 },
            { "item": "thermal:tin_nugget", "chance": 0.3 },
            { "item": "thermal:lead_nugget", "chance": 0.3 },
            { "item": "thermal:silver_nugget", "chance": 0.2 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Dust
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "exnihilosequentia:dust" }, { "item": "createsifter:zinc_mesh" }],
        "results": [
            { "item": "minecraft:bone_meal", "chance": 0.5 },
            { "item": "thermal:nickel_nugget", "chance": 0.2 },
            { "item": "tinkers_reforged:aluminum_nugget", "chance": 0.2 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Blighted Soil
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "malum:blighted_soil" }, { "item": "createsifter:zinc_mesh" }],
        "results": [
            { "item": "minecraft:gold_nugget", "chance": 0.90 },
            { "item": "malum:processed_soulstone", "chance": 0.50 },
            { "item": "malum:chunk_of_brilliance", "chance": 0.1 }
        ],
        "processingTime": 100,
        "waterlogged": false
    })
    //Arcane Charcoal
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "malum:block_of_arcane_charcoal" }, { "item": "createsifter:zinc_mesh" }],
        "results": [
            { "item": "malum:sacred_spirit", "chance": 0.25 },
            { "item": "malum:wicked_spirit", "chance": 0.25 },
            { "item": "malum:arcane_spirit", "chance": 0.25 },
            { "item": "malum:eldritch_spirit", "chance": 0.25 },
            { "item": "malum:earthen_spirit", "chance": 0.25 },
            { "item": "malum:infernal_spirit", "chance": 0.25 },
            { "item": "malum:aerial_spirit", "chance": 0.25 },
            { "item": "malum:aqueous_spirit", "chance": 0.25 }
        ],
        "processingTime": 100,
        "waterlogged": false
    })
    /****************Gold****************/
    //Gravel
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:gravel" }, { "item": "createsifter:brass_mesh" }],
        "results": [
            { "item": "create_sa:heap_of_experience", "chance": 0.25 },
            { "item": "minecraft:flint", "chance": 0.5 },
            { "item": "minecraft:coal", "chance": 0.5 },
            { "item": "minecraft:lapis_lazuli", "chance": 0.5 },
            { "item": "create:zinc_nugget", "chance": 0.75 },
            { "item": "minecraft:gold_nugget", "chance": 0.75 },
            { "item": "minecraft:iron_nugget", "chance": 0.75 },
            { "item": "create:copper_nugget", "chance": 0.75 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Sand
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:sand" }, { "item": "createsifter:brass_mesh" }],
        "results": [
            { "item": "minecraft:redstone", "chance": 0.5 },
            { "item": "thermal:tin_nugget", "chance": 0.4 },
            { "item": "thermal:lead_nugget", "chance": 0.5 },
            { "item": "thermal:silver_nugget", "chance": 0.4 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Dust
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "exnihilosequentia:dust" }, { "item": "createsifter:brass_mesh" }],
        "results": [
            { "item": "minecraft:bone_meal", "chance": 0.75 },
            { "item": "thermal:nickel_nugget", "chance": 0.4 },
            { "item": "tinkers_reforged:aluminum_nugget", "chance": 0.4 },
            { "item": "mekanism:fluorite_gem", "chance": 0.5 },
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Blighted Soil
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "malum:blighted_soil" }, { "item": "createsifter:brass_mesh" }],
        "results": [
            { "item": "minecraft:gold_nugget", "chance": 0.95 },
            { "item": "malum:processed_soulstone", "chance": 0.75 },
            { "item": "malum:crushed_brilliance", "chance": 0.25 }
        ],
        "processingTime": 100,
        "waterlogged": false
    })
    //Arcane Charcoal
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "malum:block_of_arcane_charcoal" }, { "item": "createsifter:brass_mesh" }],
        "results": [
            { "item": "malum:sacred_spirit", "chance": 0.5 },
            { "item": "malum:wicked_spirit", "chance": 0.5 },
            { "item": "malum:arcane_spirit", "chance": 0.5 },
            { "item": "malum:eldritch_spirit", "chance": 0.5 },
            { "item": "malum:earthen_spirit", "chance": 0.5 },
            { "item": "malum:infernal_spirit", "chance": 0.5 },
            { "item": "malum:aerial_spirit", "chance": 0.5 },
            { "item": "malum:aqueous_spirit", "chance": 0.5 }
        ],
        "processingTime": 100,
        "waterlogged": false
    })
    /****************Diamond****************/
    //Gravel
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:gravel" }, { "item": "createsifter:custom_mesh" }],
        "results": [
            { "item": "create_sa:heap_of_experience", "chance": 0.40 },
            { "item": "minecraft:flint", "chance": 0.6 },
            { "item": "minecraft:coal", "chance": 0.75 },
            { "item": "minecraft:lapis_lazuli", "chance": 0.6 },
            { "item": "create:crushed_raw_zinc", "chance": 0.65 },
            { "item": "create:crushed_raw_gold", "chance": 0.65 },
            { "item": "create:crushed_raw_iron", "chance": 0.65 },
            { "item": "create:crushed_raw_copper", "chance": 0.65 },
            { "item": "minecraft:diamond", "chance": 0.2 },
            { "item": "minecraft:emerald", "chance": 0.2 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Sand
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "minecraft:sand" }, { "item": "createsifter:custom_mesh" }],
        "results": [
            { "item": "minecraft:redstone", "chance": 0.5 },
            { "item": "create:crushed_raw_tin", "chance": 0.5 },
            { "item": "create:crushed_raw_lead", "chance": 0.5 },
            { "item": "create:crushed_raw_silver", "chance": 0.5 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Dust
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "exnihilosequentia:dust" }, { "item": "createsifter:custom_mesh" }],
        "results": [
            { "item": "minecraft:bone_meal", "chance": 0.75 },
            { "item": "create:crushed_raw_nickel", "chance": 0.5 },
            { "item": "create:crushed_raw_aluminum", "chance": 0.5 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Blighted Soil
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "malum:blighted_soil" }, { "item": "createsifter:custom_mesh" }],
        "results": [
            { "item": "minecraft:gold_nugget", "chance": 1.0 },
            { "item": "malum:crushed_soulstone", "chance": 0.65 },
            { "item": "malum:crushed_brilliance", "chance": 0.5 },
            { "item": "malum:cthonic_gold", "chance": 0.25 },
        ],
        "processingTime": 100,
        "waterlogged": false
    })
    //Arcane Charcoal
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "malum:block_of_arcane_charcoal" }, { "item": "createsifter:custom_mesh" }],
        "results": [
            { "item": "malum:sacred_spirit", "chance": 1 },
            { "item": "malum:wicked_spirit", "chance": 1 },
            { "item": "malum:arcane_spirit", "chance": 1 },
            { "item": "malum:eldritch_spirit", "chance": 1 },
            { "item": "malum:earthen_spirit", "chance": 1 },
            { "item": "malum:infernal_spirit", "chance": 1 },
            { "item": "malum:aerial_spirit", "chance": 1 },
            { "item": "malum:aqueous_spirit", "chance": 1 }
        ],
        "processingTime": 100,
        "waterlogged": false
    })
    //Deepsoil
    e.custom({
        "type": "createsifter:sifting",
        "ingredients": [{ "item": "undergarden:deepsoil" }, { "item": "createsifter:custom_mesh" }],
        "results": [
            { "item": "create:crushed_raw_osmium", "chance": 0.25 },
            { "item": "create:crushed_raw_uranium", "chance": 0.3 },
            { "item": "undergarden:froststeel_nugget", "chance": 0.05 },
            { "item": "undergarden:cloggrum_nugget", "chance": 0.05 },
            { "item": "undergarden:regalium_crystal", "chance": 0.05 }
        ],
        "processingTime": 200,
        "waterlogged": false
    })
    //Bone Meal with Egg Shell
    e.shapeless('minecraft:bone_meal', ['ragnamod_seven:egg_shell'])
    //Mold Cake Base
    e.smoking('ragnamod_seven:cake_mold_baked', 'ragnamod_seven:cake_mold_filled')

    //Cakes
    function unmoldCake(name) {
        e.shapeless('ragnamod_seven:' + name + '_cake_base_baked', ['ragnamod_seven:' + name + '_cake_mold_baked']).replaceIngredient('ragnamod_seven:' + name + '_cake_mold_baked', 'ragnamod_seven:cake_mold')
        e.custom({
            "type": "create:filling",
            "ingredients": [{ "item": "ragnamod_seven:cake_mold" }, { "fluid": "kubejs:" + name + "_cake_batter", "amount": 250 }],
            "results": [{ "item": "ragnamod_seven:" + name + "_cake_mold_filled" }]
        })
        e.smoking('ragnamod_seven:' + name + '_cake_mold_baked', 'ragnamod_seven:' + name + '_cake_mold_filled')
    }
    var nameofcake = [
        'ender', 'earth', 'sky', 'blood', 'magma', 'nether', 'end', 'overworld', 'twilight', 'undergarden', 'mining'
    ]
    nameofcake.forEach(C => { unmoldCake(C) })
    e.shapeless('createaddition:cake_base_baked', ['ragnamod_seven:cake_mold_baked']).replaceIngredient('ragnamod_seven:cake_mold_baked', 'ragnamod_seven:cake_mold')
    e.custom({
        "type": "create:filling",
        "ingredients": [{ "item": "ragnamod_seven:cake_mold" }, { "fluid": "kubejs:cake_batter", "amount": 250 }],
        "results": [{ "item": "ragnamod_seven:cake_mold_filled" }]
    })
    //Ender cake
    e.custom({
        "type": "create:filling",
        "ingredients": [{ "item": "ragnamod_seven:ender_cake_base_baked" }, { "fluid": "tconstruct:ender_slime", "amount": 500 }],
        "results": [{ "item": "tconstruct:ender_cake" }]
    })
    e.custom({
        "type": "create:filling",
        "ingredients": [{ "item": "ragnamod_seven:magma_cake_base_baked" }, { "fluid": "tconstruct:magma", "amount": 500 }],
        "results": [{ "item": "tconstruct:magma_cake" }]
    })
    e.custom({
        "type": "create:filling",
        "ingredients": [{ "item": "ragnamod_seven:blood_cake_base_baked" }, { "fluid": "tconstruct:blood", "amount": 500 }],
        "results": [{ "item": "tconstruct:blood_cake" }]
    })
    e.custom({
        "type": "create:filling",
        "ingredients": [{ "item": "ragnamod_seven:sky_cake_base_baked" }, { "fluid": "tconstruct:sky_slime", "amount": 500 }],
        "results": [{ "item": "tconstruct:sky_cake" }]
    })
    e.custom({
        "type": "create:filling",
        "ingredients": [{ "item": "ragnamod_seven:earth_cake_base_baked" }, { "fluid": "tconstruct:earth_slime", "amount": 500 }],
        "results": [{ "item": "tconstruct:earth_cake" }]
    })
    //Water in crucible
    e.custom({ "type": "exnihilosequentia:crucible", "input": { "tag": "minecraft:leaves" }, "amount": 250, "fluidResult": { "fluid": "minecraft:water" }, "crucibleType": "wood" })
    e.custom({ "type": "exnihilosequentia:crucible", "input": { "tag": "minecraft:saplings" }, "amount": 250, "fluidResult": { "fluid": "minecraft:water" }, "crucibleType": "wood" })

    //Blighted Gunk in Furnace
    e.smelting('malum:blighted_gunk', 'malum:runewood_sapling')

    //Antimater Collored
    e.custom({ "type": "mekanism:painting", "itemInput": { "ingredient": { "type": "forge:difference", "base": { "item": 'mekanism:pellet_antimatter' }, "subtracted": { "item": 'ragnamod_seven:green_antimatter_pellet' } } }, "chemicalInput": { "amount": 2500, "pigment": "mekanism:green" }, "output": { "item": 'ragnamod_seven:green_antimatter_pellet' } })
    e.custom({ "type": "mekanism:painting", "itemInput": { "ingredient": { "type": "forge:difference", "base": { "item": 'mekanism:pellet_antimatter' }, "subtracted": { "item": 'ragnamod_seven:blue_antimatter_pellet' } } }, "chemicalInput": { "amount": 2500, "pigment": "mekanism:blue" }, "output": { "item": 'ragnamod_seven:blue_antimatter_pellet' } })
    e.custom({ "type": "mekanism:painting", "itemInput": { "ingredient": { "type": "forge:difference", "base": { "item": 'mekanism:pellet_antimatter' }, "subtracted": { "item": 'ragnamod_seven:red_antimatter_pellet' } } }, "chemicalInput": { "amount": 2500, "pigment": "mekanism:red" }, "output": { "item": 'ragnamod_seven:red_antimatter_pellet' } })
    //Consended Block
    e.shapeless('ragnamod_seven:condensed_block', ['9x ragnamod_seven:condensed_ingot'])
    e.shapeless('9x ragnamod_seven:condensed_ingot', ['ragnamod_seven:condensed_block'])
    //FTP
    e.shaped('ragnamod_seven:ftp', ['FTP'], { F: 'ragnamod_seven:f', T: 'ragnamod_seven:t', P: 'ragnamod_seven:p' })
    //Vivid Opinium Core
    e.shaped('ragnamod_seven:vivid_opinium_core', ['BAB', 'ACA', 'BAB'], { A: 'miniutilities:the_final_opinium_core', B: 'malum:vivid_nitrate', C: 'ragnamod_seven:condensed_ingot' })

    //Essence
    //Overworld
    e.shapeless('ragnamod_seven:overworld_essence', [Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}')])
    e.custom({ "type": "create:emptying", "ingredients": [{ "item": "ragnamod_seven:overworld_essence" }], "results": [{ "item": "minecraft:glass_bottle" }, { "fluid": "kubejs:overworld_essence", "amount": 250 }] })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:overworld_essence", "amount": 1000 }, { "item": "minecraft:dandelion" }, { "item": "minecraft:poppy" }],
        "results": [{ "fluid": "kubejs:overworld_icing", "amount": 1000 }]
    })

    //Nether
    e.shapeless('ragnamod_seven:nether_essence', [Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}')])
    e.custom({ "type": "create:emptying", "ingredients": [{ "item": "ragnamod_seven:nether_essence" }], "results": [{ "item": "minecraft:glass_bottle" }, { "fluid": "kubejs:nether_essence", "amount": 250 }] })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:nether_essence", "amount": 1000 }, { "fluid": "minecraft:lava", "amount": 1000 }],
        "results": [{ "fluid": "kubejs:nether_icing", "amount": 1000 }]
    })

    //End
    e.shapeless('ragnamod_seven:end_essence', [Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}')])
    e.custom({ "type": "create:emptying", "ingredients": [{ "item": "ragnamod_seven:end_essence" }], "results": [{ "item": "minecraft:glass_bottle" }, { "fluid": "kubejs:end_essence", "amount": 250 }] })
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:end_essence", "amount": 1000 }, { "item": "minecraft:end_stone" }],
        "results": [{ "fluid": "kubejs:end_icing", "amount": 1000 }]
    })

    //Undergarden
    e.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "kubejs:end_essence", "amount": 1000 }, { "fluid": "undergarden:virulent_mix_source", "amount": 1000 }],
        "results": [{ "fluid": "kubejs:undergarden_icing", "amount": 1000 }]
    })

    //CAKES
    e.custom({ "type": "create:filling", "ingredients": [{ "item": "ragnamod_seven:overworld_cake_base_baked" }, { "fluid": "kubejs:overworld_icing", "amount": 1000 }], "results": [{ "item": "telepastries:overworld_cake" }] })
    e.custom({ "type": "create:filling", "ingredients": [{ "item": "ragnamod_seven:nether_cake_base_baked" }, { "fluid": "kubejs:nether_icing", "amount": 1000 }], "results": [{ "item": "telepastries:nether_cake" }] })
    e.custom({ "type": "create:filling", "ingredients": [{ "item": "ragnamod_seven:end_cake_base_baked" }, { "fluid": "kubejs:end_icing", "amount": 1000 }], "results": [{ "item": "telepastries:end_cake" }] })
    e.custom({ "type": "create:filling", "ingredients": [{ "item": "ragnamod_seven:undergarden_cake_base_baked" }, { "fluid": "kubejs:undergarden_icing", "amount": 1000 }], "results": [{ "item": "telepastries:custom_cake" }] })
    e.custom({ "type": "create:sequenced_assembly", "ingredient": { "item": "ragnamod_seven:twilight_cake_base_baked" }, "transitionalItem": { "item": "ragnamod_seven:twilight_cake_base_baked" }, "sequence": [{ "type": "create:filling", "ingredients": [{ "item": "ragnamod_seven:twilight_cake_base_baked" }, { "fluid": "minecraft:water", "amount": 1000 }], "results": [{ "item": "ragnamod_seven:twilight_cake_base_baked" }] }, { "type": "create:deploying", "ingredients": [{ "item": "ragnamod_seven:twilight_cake_base_baked" }, { "item": "ragnamod_seven:portal_activator" }], "results": [{ "item": "ragnamod_seven:twilight_cake_base_baked" }] }], "results": [{ "item": "telepastries:twilight_cake", "chance": 1.0 }], "loops": 1 })
    e.custom({ "type": "create:deploying", "ingredients": [{ "item": "ragnamod_seven:mining_cake_base_baked" }, { "item": "farmersdelight:red_mushroom_colony" }], "results": [{ "item": "telepastries:custom_cake2" }] })

    //Zeal Lighter
    e.shapeless('blue_skies:zeal_lighter', [Item.of('tconstruct:tough_handle', '{Material:"tinkers_reforged:gausum"}'), Item.of('tconstruct:small_axe_head', '{Material:"tinkers_reforged:cyber_steel"}')])

    //Portal Block Blue Skies
    e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:stone" }, { "fluid": "tinkers_reforged:molten_gausum", "amount": 90 }], "results": [{ "item": "blue_skies:turquoise_stone" }] })
    e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:stone" }, { "fluid": "materialis:molten_ebony_psimetal", "amount": 90 }], "results": [{ "item": "blue_skies:lunar_stone" }] })

    //Agglomerate Matter Reconstitution

    function agglomerateReconstitution(input, item1, item2, item3, item4, item5, output) { e.custom({ "type": "create:sequenced_assembly", "ingredient": { "item": input }, "transitionalItem": { "item": input }, "sequence": [{ "type": "create:deploying", "ingredients": [{ "item": input }, { "item": 'ragnamod_seven:ftp' }], "results": [{ "item": input }] }, { "type": "create:deploying", "ingredients": [{ "item": input }, { "item": item1 }], "results": [{ "item": input }] }, { "type": "create:deploying", "ingredients": [{ "item": input }, { "item": item2 }], "results": [{ "item": input }] }, { "type": "create:deploying", "ingredients": [{ "item": input }, { "item": item3 }], "results": [{ "item": input }] }, { "type": "create:deploying", "ingredients": [{ "item": input }, { "item": item4 }], "results": [{ "item": input }] }, { "type": "create:deploying", "ingredients": [{ "item": input }, { "item": item5 }], "results": [{ "item": input }] }], "results": [{ "item": output, "chance": 1.0 }], "loops": 1 }) }

    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_minecraft1', 'minecraft:redstone', 'minecraft:raw_gold', 'minecraft:raw_copper', 'minecraft:coal', 'minecraft:raw_iron', 'ragnamod_seven:agglomerate_matter_minecraft1')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_minecraft2', 'minecraft:lapis_lazuli', 'minecraft:emerald', 'minecraft:diamond', 'minecraft:honeycomb', 'minecraft:quartz', 'ragnamod_seven:agglomerate_matter_minecraft2')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_minecraft3', 'warden_and_sculk:sculk_block', 'minecraft:amethyst_shard', 'minecraft:netherite_scrap', 'minecraft:glowstone_dust', 'minecraft:ender_pearl', 'ragnamod_seven:agglomerate_matter_minecraft3')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_twilight', 'twilightforest:steeleaf_ingot', 'twilightforest:magic_beans', 'twilightforest:alpha_yeti_fur', 'twilightforest:ironwood_ingot', 'twilightforest:carminite', 'ragnamod_seven:agglomerate_matter_twilight')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_blood_magic', 'bloodmagic:vengefulcrystal', 'bloodmagic:steadfastcrystal', 'bloodmagic:destructivecrystal', 'bloodmagic:defaultcrystal', 'bloodmagic:corrosivecrystal', 'ragnamod_seven:agglomerate_matter_blood_magic')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_create', 'create_sa:hydraulic_engine', 'create_sa:steam_engine', 'create_sa:heat_engine', 'createqol:shadow_radiance', 'create:precision_mechanism', 'ragnamod_seven:agglomerate_matter_create')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_mekanism', 'mekanism:raw_uranium', 'mekanism:raw_osmium', 'mekanism:module_base', 'mekanism:reprocessed_fissile_fragment', 'mekanism:electrolytic_core', 'ragnamod_seven:agglomerate_matter_mekanism')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_powah', 'powah:crystal_spirited', 'powah:crystal_niotic', 'powah:crystal_blazing', 'powah:crystal_nitro', 'powah:steel_energized', 'ragnamod_seven:agglomerate_matter_powah')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_botania', 'botania:pixie_dust', 'botania:mana_diamond', 'botania:livingwood_log', 'mythicbotany:alfsteel_ingot', 'botania:livingrock', 'ragnamod_seven:agglomerate_matter_botania')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_blue_skies', 'blue_skies:raw_charoite', 'blue_skies:raw_falsite', 'blue_skies:raw_horizonite', 'blue_skies:raw_aquite', 'blue_skies:raw_ventium', 'ragnamod_seven:agglomerate_matter_blue_skies')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_space', 'beyond_earth:raw_ostrum', 'beyond_earth:raw_desh', 'beyond_earth:raw_calorite', 'beyond_earth:ice_shard', 'beyond_earth:cheese', 'ragnamod_seven:agglomerate_matter_space')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_blocky', 'architects_palette:cerebral_plate', 'architects_palette:nether_brass_ingot', 'architects_palette:wardstone_brick', 'architects_palette:oracle_jelly', 'architects_palette:sunmetal_brick', 'ragnamod_seven:agglomerate_matter_blocky')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_mobs', 'reliquary:catalyzing_gland', 'reliquary:zombie_heart', 'reliquary:nebulous_heart', 'reliquary:frozen_core', 'reliquary:molten_core', 'ragnamod_seven:agglomerate_matter_mobs')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_psi', 'psi:white_psimetal_plate', 'psi:black_psimetal_plate', 'psi:ebony_substance', 'psi:psigem', 'psi:ivory_substance', 'ragnamod_seven:agglomerate_matter_psi')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_thermal', 'thermal:rosin', 'thermal:slag', 'thermal:blizz_rod', 'thermal:basalz_rod', 'thermal:blitz_rod', 'ragnamod_seven:agglomerate_matter_thermal')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_evil_craft', 'evilcraft:dark_gem', 'evilcraft:condensed_blood', 'evilcraft:blood_waxed_coal', 'evilcraft:dark_power_gem', 'evilcraft:blood_potash', 'ragnamod_seven:agglomerate_matter_evil_craft')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_ae2', 'ae2:engineering_processor', 'ae2:calculation_processor', 'ae2:logic_processor', 'ae2:fluix_crystal', 'ae2:certus_quartz_crystal', 'ragnamod_seven:agglomerate_matter_ae2')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_forbidden_arcanus', 'forbidden_arcanus:dark_matter', 'forbidden_arcanus:rune', 'forbidden_arcanus:mundabitur_dust', 'forbidden_arcanus:arcane_crystal', 'forbidden_arcanus:dark_nether_star', 'ragnamod_seven:agglomerate_matter_forbidden_arcanus')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_undergarden', 'undergarden:utherium_crystal', 'undergarden:regalium_crystal', 'undergarden:raw_froststeel', 'undergarden:forgotten_nugget', 'undergarden:raw_cloggrum', 'ragnamod_seven:agglomerate_matter_undergarden')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_ftbic', 'ftbic:silicon', 'ftbic:scrap', 'ftbic:protein_bar', 'ftbic:antimatter', 'ftbic:compressed_coal_ball', 'ragnamod_seven:agglomerate_matter_ftbic')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_tconstruct', 'tconstruct:scorched_brick', 'tconstruct:seared_brick', 'tconstruct:raw_cobalt', 'tconstruct:amethyst_bronze_ingot', 'tconstruct:manyullyn_ingot', 'ragnamod_seven:agglomerate_matter_tconstruct')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_ars', 'ars_nouveau:abjuration_essence', 'ars_nouveau:water_essence', 'ars_nouveau:fire_essence', 'ars_nouveau:air_essence', 'ars_nouveau:earth_essence', 'ragnamod_seven:agglomerate_matter_ars')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_pneumaticcraft', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:programming_puzzle', 'pneumaticcraft:transistor', 'pneumaticcraft:glycerol', 'pneumaticcraft:capacitor', 'ragnamod_seven:agglomerate_matter_pneumaticcraft')
    agglomerateReconstitution('ragnamod_seven:tiny_agglomerate_matter_tech', 'compactmachines:wall', 'integrateddynamics:variable', 'integrateddynamics:logic_director', 'pneumaticcraft:plastic', 'industrialforegoing:fertilizer', 'ragnamod_seven:agglomerate_matter_tech')

    //Antimatter Pellet Block
    e.shapeless('ragnamod_seven:antimatter_pellet_block', ['9x mekanism:pellet_antimatter'])
    e.shapeless('9x mekanism:pellet_antimatter', ['ragnamod_seven:antimatter_pellet_block'])
    e.custom({ "type": "mekanism:oxidizing", "input": { "ingredient": { "item": "ragnamod_seven:antimatter_pellet_block" } }, "output": { "gas": "mekanism:antimatter", "amount": 9000 } })

    //Mystical Prosperity
    e.custom({ "type": "create:crushing", "ingredients": [{ "item": "mysticalagriculture:prosperity_shard" }], "results": [{ "item": "ragnamod_seven:prosperity_dust", "count": 2 }], "processingTime": 20 })
    e.custom({ "type": "create:mixing", "ingredients": [{ "item": "ragnamod_seven:prosperity_dust" }, { "fluid": "kubejs:distilled_water", "amount": 50 }], "results": [{ "fluid": "kubejs:prosperity_fluid", "amount": 50 }] })
    e.custom({ "type": "create:filling", "ingredients": [{ "tag": "quark:shards" }, { "fluid": "kubejs:prosperity_fluid", "amount": 50 }], "results": [{ "item": "mysticalagriculture:prosperity_shard" }] })
    e.custom({ "type": "malum:spirit_infusion", "input": { "item": "warden_and_sculk:echo_shard", "count": 1 }, "output": { "item": "mysticalagriculture:prosperity_shard" }, "extra_items": [{ "item": "thaumon:mutagen", "count": 6 }, { "item": "naturesaura:birth_spirit", "count": 4 }, { "item": "occultism:spirit_attuned_crystal", "count": 2 }, { "item": "psi:psigem", "count": 2 }], "spirits": [{ "type": "sacred", "count": 64 }, { "type": "wicked", "count": 64 }, { "type": "arcane", "count": 64 }, { "type": "eldritch", "count": 64 }] })

    //Seed Base
    e.shapeless('ragnamod_seven:inferium_seed', ['mysticalagriculture:prosperity_seed_base', '2x mysticalagriculture:inferium_essence'])
    e.shapeless('ragnamod_seven:prudentium_seed', ['ragnamod_seven:inferium_seed', '2x mysticalagriculture:prudentium_essence'])
    e.shapeless('ragnamod_seven:tertium_seed', ['ragnamod_seven:prudentium_seed', '2x mysticalagriculture:tertium_essence'])
    e.shapeless('ragnamod_seven:imperium_seed', ['ragnamod_seven:tertium_seed', '2x mysticalagriculture:imperium_essence'])
    e.shapeless('ragnamod_seven:supremium_seed', ['ragnamod_seven:imperium_seed', '2x mysticalagriculture:supremium_essence'])
    e.shapeless('ragnamod_seven:insanium_seed', ['ragnamod_seven:supremium_seed', '2x mysticalagradditions:insanium_essence'])

    //Crux
    e.shaped('ragnamod_seven:alfsteel_crux', ['ADA', 'BCB', 'ABA'], { A: 'mysticalagradditions:insanium_essence', B: 'mythicbotany:alfsteel_ingot', C: 'minecraft:diamond_block', D: 'mythicbotany:alfsteel_pylon' })
    e.shaped('ragnamod_seven:chaotic_crux', ['ADA', 'BCB', 'ABA'], { A: 'mysticalagradditions:insanium_essence', B: 'draconicevolution:chaos_shard', C: 'minecraft:diamond_block', D: 'draconicevolution:chaotic_core' })
    e.shaped('ragnamod_seven:antimatter_crux', ['ABA', 'BCB', 'ABA'], { A: 'mysticalagradditions:insanium_essence', B: 'mekanism:pellet_antimatter', C: 'minecraft:diamond_block' })
    e.shaped('ragnamod_seven:infinity_crux', ['ADA', 'BCB', 'ABA'], { A: 'mysticalagradditions:insanium_essence', B: 'avaritia:infinity_ingot', C: 'minecraft:diamond_block', D: 'avaritia:infinity_catalyst' })

    //Environmental Accumulator
    e.custom({ "type": "biomancy:bio_forging", "ingredients": [{ "item": "evilcraft:blood_orb_filled", "count": 1 }, { "item": "rftoolsutility:environmental_controller", "count": 1 }, { "item": "biomancy:creator_mix", "count": 1 }, { "item": "biomancy:fertilizer", "count": 1 }, { "item": "ironfurnaces:rainbow_core", "count": 1 }], "result": { "item": "evilcraft:environmental_accumulation_core" }, "bio_forge_tab": "biomancy:blocks", "nutrientsCost": 500 })

    //Washing Crushed Ore
    e.custom({ "type": "create:splashing", "ingredients": [{ "item": "create:crushed_raw_osmium" }], "results": [{ "item": "mekanism:nugget_osmium", "count": 9 }, { "item": "thermal:apatite", "chance": 0.50 }] })
    e.custom({ "type": "create:splashing", "ingredients": [{ "item": "create:crushed_raw_silver" }], "results": [{ "item": "thermal:silver_nugget", "count": 9 }, { "item": "minecraft:coal", "chance": 0.50 }] })
    e.custom({ "type": "create:splashing", "ingredients": [{ "item": "create:crushed_raw_tin" }], "results": [{ "item": "thermal:tin_nugget", "count": 9 }, { "item": "minecraft:glowstone_dust", "chance": 0.25 }] })
    e.custom({ "type": "create:splashing", "ingredients": [{ "item": "create:crushed_raw_lead" }], "results": [{ "item": "thermal:lead_nugget", "count": 9 }, { "item": "minecraft:lapis_lazuli", "chance": 0.50 }] })
    e.custom({ "type": "create:splashing", "ingredients": [{ "item": "create:crushed_raw_aluminum" }], "results": [{ "item": "tinkers_reforged:aluminum_nugget", "count": 9 }, { "item": "thermal:niter", "chance": 0.25 }] })
    e.custom({ "type": "create:splashing", "ingredients": [{ "item": "create:crushed_raw_uranium" }], "results": [{ "item": "mekanism:nugget_uranium", "count": 9 }, { "item": "ae2:ender_dust", "chance": 0.75 }] })
    e.custom({ "type": "create:splashing", "ingredients": [{ "item": "create:crushed_raw_nickel" }], "results": [{ "item": "thermal:nickel_nugget", "count": 9 }, { "item": "thermal:sulfur", "chance": 0.50 }] })

})