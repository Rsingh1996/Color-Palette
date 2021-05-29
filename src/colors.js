const colors = [
    {
      colorFamily: "Red Roses",
      shades: [
        { colorName: "Cinnabar", colorCode: "#E44236" },
        { colorName: "Fire Brick", colorCode: "#B83227" },
        { colorName: "Persian Red", colorCode: "#D63031" },
        { colorName: "Crimson", colorCode: "#E81342" },
        { colorName: "Red Orange", colorCode: "#FF3031" },
        { colorName: "Harley Davidson Orange", colorCode: "#BA2F16" },
        { colorName: "Amaranth", colorCode: "#EC4849" },
        { colorName: "Coral Red", colorCode: "#FF3E4D" },
        { colorName: "Alizarin", colorCode: "#E71C23" },
        { colorName: "Burnt Sienna", colorCode: "#ED535D" },
        { colorName: "Scarlet", colorCode: "#EA2E09" },
        { colorName: "Burgundy", colorCode: "#730113" },
        { colorName: "Contessa", colorCode: "#bf6464" },
        { colorName: "Venetian Red", colorCode: "#ba0b32" },
        { colorName: "Carmine", colorCode: "#980036" },
        { colorName: "Terra Cotta", colorCode: "#df7163" },
        { colorName: "Maroon", colorCode: "#800000" },
        { colorName: "Dark Red", colorCode: "#890B06" },
        { colorName: "Chilean Fire", colorCode: "#D64A31" }
      ]
    },
    {
      colorFamily: "Blue Butterflies",
      shades: [
        { colorName: "Summer Sky", colorCode: "#3498DB" },
        { colorName: "Steel Blue", colorCode: "#487EB0" },
        { colorName: "Maya Blue", colorCode: "#74B9FF" },
        { colorName: "Navy Blue", colorCode: "#0A79DF" },
        { colorName: "Royal Blue", colorCode: "#4834DF" },
        { colorName: "Torea Bay", colorCode: "#30336B" },
        { colorName: "Danube", colorCode: "#6A89CC" },
        { colorName: "Sapphire", colorCode: "#0A3D62" },
        { colorName: "Bondie Blue", colorCode: "#009CAA" },
        { colorName: "Iris Blue", colorCode: "#0ABDE3" },
        { colorName: "Deep Sky Blue", colorCode: "#25CCF7" },
        { colorName: "Free Speech Blue", colorCode: "#3C40C6" }
      ]
    },
    {
      colorFamily: "Green Grass",
      shades: [
        { colorName: "Shamrock", colorCode: "#2ecc72" },
        { colorName: "Jungle Green", colorCode: "#26ae60" },
        { colorName: "Apple", colorCode: "#6ab04c" },
        { colorName: "Keppel", colorCode: "#6BBBAA" },
        { colorName: "Conifer", colorCode: "#badc57" },
        { colorName: "Lime Green", colorCode: "#43BE31" },
        { colorName: "Kelly Green", colorCode: "#45CE20" },
        { colorName: "Mountain Meadow", colorCode: "#10A881" },
        { colorName: "Light Sea Green", colorCode: "#1BCAAB" },
        { colorName: "Light Green", colorCode: "#7CEC9F" },
        { colorName: "Pigment Green", colorCode: "#019031" },
        { colorName: "Yellow Green", colorCode: "#A3CB37" },
        { colorName: "Turquoise", colorCode: "#53E0BC" },
        { colorName: "Elf Green", colorCode: "#218F76" }
      ]
    },
    {
      colorFamily: "Fresh Yellow",
      shades: [
        { colorName: "Moon Yellow", colorCode: "#EEC213" },
        { colorName: "Tacao", colorCode: "#F5C469" },
        { colorName: "Turbo", colorCode: "#F4C724" },
        { colorName: "Buff", colorCode: "#F0DF87" },
        { colorName: "Gold Tips", colorCode: "#DFAF2B" },
        { colorName: "Saffron", colorCode: "#FAC42F" },
        { colorName: "Supernova", colorCode: "#F9B939" },
        { colorName: "Golden Glow", colorCode: "#FBD28B" },
        { colorName: "Yellow Sea", colorCode: "#F2B02E" },
        { colorName: "Sun Glow", colorCode: "#FAD02E" },
        { colorName: "Tulip Tree", colorCode: "#E5B143" },
        { colorName: "Lemon", colorCode: "#FFF222" },
        { colorName: "School Bus Yellow", colorCode: "#E1DA00" },
        { colorName: "Peach Yellow", colorCode: "#F9DDA4" }
      ]
    },
    {
      colorFamily: "Shades of Gray",
      shades: [
        { colorName: "Regent Gray", colorCode: "#7B8788" },
        { colorName: "Conch", colorCode: "#99AAAB" },
        { colorName: "Gunmetal", colorCode: "#2C3335" },
        { colorName: "Pale Sky", colorCode: "#616C6F" },
        { colorName: "Zircon", colorCode: "#DAE0E2" },
        { colorName: "Fiord", colorCode: "#535C68" },
        { colorName: "Cloud Burst", colorCode: "#333945" },
        { colorName: "Oxford Blue", colorCode: "#2B333D" },
        { colorName: "Blue Bayoux", colorCode: "#586776" },
        { colorName: "Bali Hai", colorCode: "#8395A7" }
      ]
    },
    {
      colorFamily: "Purple Gang",
      shades: [
        { colorName: "Fuchsia", colorCode: "#a442a0" },
        { colorName: "Mamba", colorCode: "#736a86" },
        { colorName: "Electric Purple", colorCode: "#ad0afd" },
        { colorName: "Vivid Violet", colorCode: "#7f3e98" },
        { colorName: "Windsor", colorCode: "#412a7a" },
        { colorName: "Cold Purple", colorCode: "#9d8abf" },
        { colorName: "Trendy Pink", colorCode: "#7c5379" },
        { colorName: "Affair", colorCode: "#7a547f" },
        { colorName: "Cosmic", colorCode: "#824B79" },
        { colorName: "Studio", colorCode: "#81448E" },
        { colorName: "Heliotrope", colorCode: "#CC3FFF" },
        { colorName: "Ce Soir", colorCode: "#916e99" },
        { colorName: "Light Slate Blue", colorCode: "#9878f8" },
        { colorName: "Psychedelic Purple", colorCode: "#D428FF" },
        { colorName: "East Side", colorCode: "#ab92b3" },
        { colorName: "Indigo", colorCode: "#4B0082" },
        { colorName: "Persian Indigo", colorCode: "#53197F" },
        { colorName: "Medium Orchid", colorCode: "#b56edc" },
        { colorName: "Mauve", colorCode: "#E19CFC" }
      ]
    },
    {
      colorFamily: "Brown Town",
      shades: [
        { colorName: "Calico", colorCode: "#d7a98c" },
        { colorName: "Eunry", colorCode: "#c99f99" },
        { colorName: "Sepia", colorCode: "#98623c" },
        { colorName: "Tide", colorCode: "#c1b5a9" },
        { colorName: "Indochine", colorCode: "#996633" },
        { colorName: "Beeswax", colorCode: "#e9d7ab" },
        { colorName: "Hampton", colorCode: "#E5D7A0" },
        { colorName: "Dark Goldenrod", colorCode: "#a87900" },
        { colorName: "Dixie", colorCode: "#CC8833" },
        { colorName: "Espresso", colorCode: "#4a2c2a" },
        { colorName: "Santa Fe", colorCode: "#b0724a" },
        { colorName: "Brown", colorCode: "#9e3623" },
        { colorName: "Muesli", colorCode: "#9f7d4f" }
      ]
    },
    {
        colorFamily: "Cyan Group",
        shades: [
          { colorName: "Lightcyan", colorCode: "#E0FFFF" },
          { colorName: "Cyan", colorCode: "#00FFFF" },
          { colorName: "Aqua", colorCode: "#00FFFF" },
          { colorName: "Aquamarine", colorCode: "#7FFFD4" },
          { colorName: "Mediumaquamarine", colorCode: "#66CDAA" },
          { colorName: "Paleturquoise", colorCode: "#AFEEEE" },
          { colorName: "Turquoise", colorCode: "#40E0D0" },
          { colorName: "Mediumturquoise", colorCode: "#48D1CC" },
          { colorName: "Darkturquoise", colorCode: "#00CED1" },
          { colorName: "Lightseagreen", colorCode: "#20B2AA" },
          { colorName: "Cadetblue", colorCode: "#5F9EA0" },
          { colorName: "Darkcyan", colorCode: "#008B8B" },
          { colorName: "Teal", colorCode: "#008080" }
        ]
      },
    {
      colorFamily: "Random Fun",
      shades: [
        { colorName: "Solitude", colorCode: "#EAF0F1" },
        { colorName: "Dark Pink", colorCode: "#E74292" },
        { colorName: "Robin Egg Blue", colorCode: "#01CBC6" },
        { colorName: "Dark Orchid", colorCode: "#BB2CD9" },
        { colorName: "Medium Purple", colorCode: "#8B78E6" },
        { colorName: "Downy", colorCode: "#5DCCCC" },
        { colorName: "Denim", colorCode: "#1287A5" },
        { colorName: "Geraldine", colorCode: "#EA7773" },
        { colorName: "Lucky Point", colorCode: "#2B2B52" },
        { colorName: "Cupid", colorCode: "#F5BCBA" }
      ]
    }
  ];
  
  export default colors;