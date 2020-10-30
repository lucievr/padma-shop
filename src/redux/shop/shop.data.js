const SHOP_DATA = {
  soaps: {
    id: 1,
    title: 'Soaps',
    routeName: 'soaps',
    items: [
      {
        id: 1,
        name: 'Plum & Cinnamon',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps%2Fplum-cinnamon.jpg?alt=media&token=3393e7ee-c775-4bfb-b582-107534f77c8c',
        price: 4.99,
      },
      {
        id: 2,
        name: 'Cherry Blossom',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps%2Fcherry-blossom.jpg?alt=media&token=5ddbbdfb-8262-4da7-8daf-0a553a2977ba',
        price: 6.25,
      },
      {
        id: 3,
        name: 'Organic Coconut',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps%2Fcoconut.jpg?alt=media&token=d5d009d5-0986-4972-b309-2a9965ba7e74',
        price: 7.49,
      },
      {
        id: 4,
        name: 'Chai & Sweet Orange',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps%2Fchaitea-sweetorange.jpg?alt=media&token=38adb892-1b7d-43a4-9424-4ac4ccadea58',
        price: 8.99,
      },
      {
        id: 5,
        name: 'Lavender',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps%2Flavender.jpg?alt=media&token=9452abf5-1d90-47bf-a1b2-65f5c58ede60',
        price: 5.2,
      },
      {
        id: 6,
        name: 'Organic Handmade',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps%2Forganic-handmade.jpg?alt=media&token=9ec275ab-235d-47ff-a96f-d77e28188eaa',
        price: 6.99,
      },
      {
        id: 7,
        name: 'Vanilla Rose',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps%2Fvanilla-rose.jpg?alt=media&token=e1b57312-56d9-4a27-9755-075376663f52',
        price: 8.49,
      },
      {
        id: 8,
        name: 'Pear & Apple',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps%2Fapple-pear.jpg?alt=media&token=458c978b-1736-4f7d-a157-b8c80695a4f8',
        price: 4.25,
      },
      {
        id: 9,
        name: 'Shea Butter',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps%2Fshea-butter.jpg?alt=media&token=313b9831-236e-4b4b-80e9-faf640b8a026',
        price: 7.99,
      },
      {
        id: 10,
        name: 'Juniper & Tea Tree',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps%2Fjuniper-teatree.jpg?alt=media&token=4a5c9912-2c62-4da5-9c1c-24ce1806ffb4',
        price: 6.3,
      },
    ],
  },
  'essential-oils': {
    id: 2,
    title: 'Essential oils',
    routeName: 'essential-oils',
    items: [
      {
        id: 11,
        name: 'Refreshing Mint',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Frefreshing-mint.jpg?alt=media&token=dacc39d3-f655-4e82-894d-8c452a6b1a65',
        price: 9.25,
      },
      {
        id: 12,
        name: 'Organic Hemp',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Forganic-hemp.jpg?alt=media&token=b625f7c4-f12b-43bc-98e7-abd481d7f0e7',
        price: 17.49,
      },
      {
        id: 13,
        name: 'Sleep & Detox',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Fsleep-detox.jpg?alt=media&token=9abb7476-9664-4478-98d6-9d6215b33240',
        price: 11.99,
      },
      {
        id: 14,
        name: 'Soothing Orchid',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Fsoothing-orchid.jpg?alt=media&token=08ac13a5-9ed1-4ca3-badd-3f74177d158f',
        price: 19.25,
      },
      {
        id: 15,
        name: 'Lavender',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Flavender.jpg?alt=media&token=d54e906d-7e24-4640-87a9-3d7b5b96ad70',
        price: 8.6,
      },
      {
        id: 16,
        name: 'Cypress & Jasmine',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Fcypress-jasmine.jpg?alt=media&token=0cc1d1e8-8bb2-4810-ba91-99c4c11d965f',
        price: 18.99,
      },
      {
        id: 17,
        name: 'Lemon Zest',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Flemon-zest.jpg?alt=media&token=ad3da4cb-ac6b-48cf-8aa3-c65c217aeabf',
        price: 10.25,
      },
      {
        id: 18,
        name: 'Energising Raspberry',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Fenergising-raspberry.jpg?alt=media&token=f99afd20-57fe-4053-8cb8-30816b660ced',
        price: 12.49,
      },
      {
        id: 19,
        name: 'Deep Blue',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Fdeep-blue.jpg?alt=media&token=b005287b-367b-4064-8c6a-1f8ed579a5b3',
        price: 9.2,
      },
      {
        id: 20,
        name: 'Grapefruit & Bergamot',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Fgrapefruit-bergamot.jpg?alt=media&token=35f4c415-624f-4d2e-b14e-0225418a241f',
        price: 10.6,
      },
      {
        id: 21,
        name: 'Ylang Ylang',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils%2Fylang-ylang.jpg?alt=media&token=9bae5109-0fdf-49f8-a79f-ea7d64595720',
        price: 11.39,
      },
    ],
  },
  'bath-salts': {
    id: 3,
    title: 'Bath salts',
    routeName: 'bath-salts',
    items: [
      {
        id: 22,
        name: 'Calming Blue',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts%2Fcalming-blue.jpg?alt=media&token=ca65b5f9-3dfd-4936-99b9-6715cf7191c4',
        price: 7.8,
      },
      {
        id: 23,
        name: 'Relax',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts%2Frelax.jpg?alt=media&token=29f4bd94-aa0c-46d7-b361-a9ecc1e5fd9c',
        price: 4.99,
      },
      {
        id: 24,
        name: 'Himalayan Pink',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts%2Fhimalayan.jpg?alt=media&token=efeb0f7a-0d9a-4126-879f-562dc18b4c9f',
        price: 9.2,
      },
      {
        id: 25,
        name: 'Chamomile',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts%2Fchamomile.jpg?alt=media&token=982fe4f9-abd8-4f37-ace3-3a2e1c96a1aa',
        price: 3.49,
      },
      {
        id: 26,
        name: 'Black Lava',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts%2Fblack-lava.jpg?alt=media&token=d046fb15-8368-4887-9052-939c8581e9c0',
        price: 14.89,
      },
      {
        id: 27,
        name: 'Vanilla Cinnamon',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts%2Fvanilla-cinnamon.jpg?alt=media&token=82d07d97-c3ff-4704-96eb-121726f97ef5',
        price: 11.25,
      },
      {
        id: 28,
        name: 'Relief & Destress',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts%2Frelief-destress.jpg?alt=media&token=92ab7603-4aaa-47bf-a8f5-dfbbbf53d578',
        price: 4.99,
      },
      {
        id: 29,
        name: 'Fresh Citrus',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts%2Ffresh-citrus.jpg?alt=media&token=b8c45975-4123-48fa-85f8-7107983cc09a',
        price: 7.8,
      },
      {
        id: 30,
        name: 'Ocean Power',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts%2Focean-power.jpg?alt=media&token=4102624e-9d24-4bd4-a451-b677d53d9fce',
        price: 3.49,
      },
      {
        id: 31,
        name: 'Autumn Dream',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts%2Fautumn-dream.jpg?alt=media&token=3b1b3271-a0e8-44a7-ab56-1495637bc6c6',
        price: 6.3,
      },
    ],
  },
  'bathroom-essentials': {
    id: 4,
    title: 'Bathroom essentials',
    routeName: 'bathroom-essentials',
    items: [
      {
        id: 32,
        name: 'Bamboo Toothbrush',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Fbamboo-toothbrush.jpg?alt=media&token=ab962397-0158-46cc-a25e-dfcfd2cf3880',
        price: 2.79,
      },
      {
        id: 33,
        name: 'Natural Toothpaste',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Fnatural-toothpaste.jpg?alt=media&token=b43b1a1e-e905-4ff7-ba57-918517df945f',
        price: 3.2,
      },
      {
        id: 34,
        name: 'Egyptian Cotton Towel',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Ftowel.jpg?alt=media&token=3cf1223b-b88b-440c-9f26-b9fdce720b2a',
        price: 8.6,
      },
      {
        id: 35,
        name: 'Natural Sponge',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Fnatural-sponge.jpg?alt=media&token=9610dd1f-2fca-4d91-a124-d54ec5ec0a49',
        price: 12.25,
      },
      {
        id: 36,
        name: 'Bamboo Hair Brush',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Fbamboo-hairbrush.jpg?alt=media&token=da500682-ca5a-4cb6-bb0a-cbad70434a92',
        price: 9.99,
      },
      {
        id: 37,
        name: 'Coconut Body Oil',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Fcoconut-oil.jpg?alt=media&token=01e7f0e2-24d9-448a-a720-d547f364540d',
        price: 11.8,
      },
      {
        id: 38,
        name: 'Stainless Steel Razor',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Frazor.jpg?alt=media&token=ed03cbb3-0df0-4010-b883-ee83b836554f',
        price: 12.49,
      },
      {
        id: 39,
        name: 'Bamboo Cotton Buds',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Fcotton-buds.jpg?alt=media&token=02acc193-d96b-4a0a-8e3b-dc0919f03a93',
        price: 5.99,
      },
      {
        id: 40,
        name: 'Hand Soap',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Fhand-soap.jpg?alt=media&token=e0b931fc-64c1-4b46-8e7a-b54ab8b1e349',
        price: 6.25,
      },
      {
        id: 41,
        name: 'Shampoo & Shower Gel',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Fshapoo-showergel.jpg?alt=media&token=ee0484ab-efdc-4e81-8e3d-f73379b5cdd6',
        price: 7.2,
      },
      {
        id: 42,
        name: 'Bamboo Nail Brush',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials%2Fnail-brush.jpg?alt=media&token=7221d071-72ad-4dbb-a3a3-d0dd138a47d4',
        price: 3.89,
      },
    ],
  },
  'covid-essentials': {
    id: 5,
    title: 'COVID essentials',
    routeName: 'covid-essentials',
    items: [
      {
        id: 43,
        name: 'Respiratory Mask KN95 10pcs',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials%2Fkn95.jpg?alt=media&token=f9938cdb-04cd-4bbe-8d79-0ae9407efba3',
        price: 14.79,
      },
      {
        id: 44,
        name: 'Hand Sanitizer 4pcs',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials%2Fhand-sanitizer.jpg?alt=media&token=6fee9ab1-50a0-4933-97b9-9545ec149c11',
        price: 12.25,
      },
      {
        id: 45,
        name: 'Surgical Face Mask 50pcs',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials%2Fsurgical-mask.jpg?alt=media&token=a1377bf7-8910-410a-9693-ec576798b86f',
        price: 19.99,
      },
      {
        id: 46,
        name: 'Antibacterial Wipes 3 packs',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials%2Fantibacterial-wipes.jpg?alt=media&token=2f9e6ebb-2b64-4e06-bb12-edb1480c448e',
        price: 7.49,
      },
      {
        id: 47,
        name: 'Face Shield',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials%2Fface-shield.jpg?alt=media&token=e04d6780-b5bd-4407-af97-a42ffa382067',
        price: 8.79,
      },
      {
        id: 48,
        name: 'Protective Gloves 50pcs',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials%2Fprotective-gloves.jpg?alt=media&token=340145af-dd6d-4acd-b2f6-2775d4b1b893',
        price: 11.55,
      },
      {
        id: 49,
        name: 'Cloth Face Mask (Red)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials%2Fface-mask-red.jpg?alt=media&token=07c3e67b-9e81-49e8-b336-19b2bbe93b3b',
        price: 4.25,
      },
      {
        id: 50,
        name: 'Cloth Face Mask (Grey)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials%2Fface-mask-grey.jpg?alt=media&token=018d4d19-7c72-4d1d-be31-b63014bddf6e',
        price: 4.25,
      },
      {
        id: 51,
        name: 'Cloth Face Mask (Navy)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials%2Fface-mask-navy.jpg?alt=media&token=0da4432a-e4c2-467d-894f-9b89e2208e35',
        price: 4.25,
      },
      {
        id: 52,
        name: 'Sanitizer & Mask Set',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials%2Fsanitizer-mask.jpg?alt=media&token=7d0a76b3-b538-4b18-9010-59cc8fff0371',
        price: 2.99,
      },
    ],
  },
};

export default SHOP_DATA;
