

import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.data.IData;
import crafttweaker.api.fluid.FluidIngredient;
import crafttweaker.api.util.random.Percentaged;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.tag.manager.ITagManager;
import crafttweaker.api.bracket.BracketHandlers;
import mods.jeitweaker.Jei;

craftingTable.removeByName("create:crafting/kinetics/basin");
craftingTable.removeByRegex("createcasing:crafting/shafts*");

craftingTable.remove(<item:steampowered:bronze_boiler>);
craftingTable.remove(<item:steampowered:bronze_burner>);
craftingTable.remove(<item:steampowered:cast_iron_boiler>);
craftingTable.remove(<item:steampowered:cast_iron_burner>);
craftingTable.remove(<item:steampowered:steel_boiler>);
craftingTable.remove(<item:steampowered:steel_burner>);
<recipetype:minecraft:smelting>.remove(<item:tfmg:fireproof_brick>);


<recipetype:tfmg:polarizing>.remove(<item:tfmg:magnetic_ingot>);

craftingTable.remove(<item:create:large_water_wheel>);
craftingTable.addShaped("handcrafted_create_large_watermill", <item:create:large_water_wheel>,[
    [<tag:items:tfc:lumber>,<tag:items:minecraft:planks>,<tag:items:tfc:lumber>],
    [<tag:items:minecraft:planks>,<item:create:shaft>,<tag:items:minecraft:planks>],
    [<tag:items:tfc:lumber>,<tag:items:minecraft:planks>,<tag:items:tfc:lumber>]]);    

craftingTable.remove(<item:create:water_wheel>);
craftingTable.addShaped("handcrafted_create_watermill", <item:create:water_wheel>,[
    [<tag:items:tfc:lumber>,<tag:items:tfc:lumber>,<tag:items:tfc:lumber>],
    [<tag:items:tfc:lumber>,<item:create:shaft>,<tag:items:tfc:lumber>],
    [<tag:items:tfc:lumber>,<tag:items:tfc:lumber>,<tag:items:tfc:lumber>]]);    


craftingTable.remove(<item:create:brass_hand>);
<recipetype:tfc:anvil>.addJsonRecipe("anvil_create_brass_hand", {
  "type": "tfc:anvil",
  "input": {
    "tag": "forge:double_ingots/brass"
  },
  "result": {
    "item": "create:brass_hand"
  },
  "tier": 2,
  "rules": [
    "bend_last",
    "bend_second_last",
    "bend_third_last"
  ]
}
);

<recipetype:create:compacting>.addJsonRecipe("magnetic_ingot", {
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    },    
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    },    
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    },    
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    }, 
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    },    
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    },    
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    },    
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    },
    {
      "item": "tfc:powder/magnetite"
    }             
  ],
  "results": [
    {
      "item": "tfmg:magnetic_ingot"
    }
  ]
});


craftingTable.remove(<item:createaddition:alternator>);
craftingTable.addShaped("handcrafted_alternator_dynamo", <item:createaddition:alternator>,[
    [<tag:items:forge:sheets/steel>,<item:immersiveengineering:dynamo>,<tag:items:forge:sheets/steel>],
    [<item:immersiveengineering:dynamo>,<item:immersiveengineering:capacitor_lv>,<item:immersiveengineering:dynamo>],
    [<tag:items:forge:sheets/steel>,<item:immersiveengineering:dynamo>,<tag:items:forge:sheets/steel>]]);          


craftingTable.remove(<item:create:belt_connector>);

<recipetype:tfc:knapping>.addJsonRecipe("knapped_create_belt_leather", {
  "type": "tfc:knapping",
  "knapping_type": "tfc:leather",
    "pattern": [
        "     ",
        "XXXXX",
        "X   X",
        "XXXXX",
        "     "
      ],
    "result": {
        "item": "create:belt_connector",
        "count": 2
    }
});

<recipetype:createaddition:rolling>.addJsonRecipe("rolled_create_belt_rubber", {
	"type":"createaddition:rolling",
	"input": {
      	"tag": "forge:rubber"
	},
	"result": {
		"item": "create:belt_connector",
		"count": 8
	}
});    

craftingTable.remove(<item:create:shaft>);
craftingTable.addShaped("raw_stone_to_shaft", <item:create:shaft> * 4, [
    [<tag:items:tfc:rock/raw>, <tag:items:tfc:chisels>],
    [<tag:items:tfc:rock/raw>],
    []]);



craftingTable.remove(<item:create:super_glue>);
craftingTable.addShaped("handcrafted_glue_packaging", <item:create:super_glue>,[
    [<tag:items:forge:slimeballs>,<tag:items:forge:shiny_foil>],
    [<tag:items:minecraft:wooden_buttons>,<tag:items:forge:slimeballs>]]);