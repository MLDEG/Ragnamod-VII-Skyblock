onEvent('recipes', e => {

    //Crystal Tconstruct
    function crushCrystal(block, cluster, output) {
        e.custom({ "type": "create:crushing", "ingredients": [{ "item": block }], "results": [{ "item": output, "count": 3 }, { "item": output, "chance": 0.5 }], "processingTime": 150 })
        e.custom({ "type": "create:crushing", "ingredients": [{ "item": cluster }], "results": [{ "item": output, "count": 7 }, { "item": output, "chance": 0.5 }], "processingTime": 150 })
    }

    crushCrystal('tconstruct:earth_slime_crystal_block', 'tconstruct:earth_slime_crystal_cluster', 'tconstruct:earth_slime_crystal')
    crushCrystal('tconstruct:sky_slime_crystal_block', 'tconstruct:sky_slime_crystal_cluster', 'tconstruct:sky_slime_crystal')
    crushCrystal('tconstruct:ichor_slime_crystal_block', 'tconstruct:ichor_slime_crystal_cluster', 'tconstruct:ichor_slime_crystal')
    crushCrystal('tconstruct:ender_slime_crystal_block', 'tconstruct:ender_slime_crystal_cluster', 'tconstruct:ender_slime_crystal')

})