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
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps%2Fplum-cinnamon.jpg?alt=media&token=7fb1c1f9-423c-4b63-9723-2ed76ce64904',
        price: 4.99,
      },
      {
        id: 2,
        name: 'Cherry Blossom',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps%2Fcherry-blossom.jpg?alt=media&token=5961c70d-8031-4c53-aa3c-28b2f053c96d',
        price: 6.25,
      },
      {
        id: 3,
        name: 'Organic Coconut',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps%2Fcoconut.jpg?alt=media&token=252e56c5-83d1-4f76-9743-85dfc5101037',
        price: 7.49,
      },
      {
        id: 4,
        name: 'Chai & Sweet Orange',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps%2Fchaitea-sweetorange.jpg?alt=media&token=03491b1e-220b-4f90-b1f7-523c3395ff4c',
        price: 8.99,
      },
      {
        id: 5,
        name: 'Lavender',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps%2Flavender.jpg?alt=media&token=316e70c0-11e2-4238-9eb3-d0c191515d52',
        price: 5.2,
      },
      {
        id: 6,
        name: 'Organic Handmade',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps%2Forganic-handmade.jpg?alt=media&token=4a863f96-bb31-4097-ac91-921082063613',
        price: 6.99,
      },
      {
        id: 7,
        name: 'Vanilla Rose',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps%2Fvanilla-rose.jpg?alt=media&token=bdb9006f-4128-4ae3-a5c4-188d96d774d3',
        price: 8.49,
      },
      {
        id: 8,
        name: 'Pear & Apple',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps%2Fapple-pear.jpg?alt=media&token=68102813-9c5f-4591-a967-8e470118636b',
        price: 4.25,
      },
      {
        id: 9,
        name: 'Shea Butter',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps%2Fshea-butter.jpg?alt=media&token=eb9652bc-5eb9-4e0e-8c93-4d53da2a36fc',
        price: 7.99,
      },
    ],
  },
  'essential-oils': {
    id: 2,
    title: 'Essential oils',
    routeName: 'essential-oils',
    items: [
      {
        id: 10,
        name: 'Refreshing Mint',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils%2Frefreshing-mint.jpg?alt=media&token=c82bc28a-22a0-4636-9f77-990a12212d0c',
        price: 9.25,
      },
      {
        id: 11,
        name: 'Organic Hemp',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils%2Forganic-hemp.jpg?alt=media&token=789e340b-f664-4268-ba1b-75cd432a15af',
        price: 17.49,
      },
      {
        id: 12,
        name: 'Sleep & Detox',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils%2Fsleep-detox.jpg?alt=media&token=8ba7fb90-8d33-41f1-a43d-8a34e0ba2ad4',
        price: 11.99,
      },
      {
        id: 13,
        name: 'Soothing Orchid',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils%2Fsoothing-orchid.jpg?alt=media&token=ca50a029-b437-4d17-8e5b-8bd6ff504497',
        price: 19.25,
      },
      {
        id: 14,
        name: 'Lavender',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils%2Flavender.jpg?alt=media&token=44ad810e-42fc-4fdb-9d59-8b75080da901',
        price: 8.6,
      },
      {
        id: 15,
        name: 'Cypress & Jasmine',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils%2Fcypress-jasmine.jpg?alt=media&token=711aa53d-9351-41c4-a71f-26796e679b06',
        price: 18.99,
      },
      {
        id: 16,
        name: 'Lemon Zest',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils%2Flemon-zest.jpg?alt=media&token=812ae1d4-096f-4504-8e93-dcd6854dac10',
        price: 10.25,
      },
      {
        id: 17,
        name: 'Energising Raspberry',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils%2Fenergising-raspberry.jpg?alt=media&token=422a00da-4f5d-417b-9aa1-d95a5bcd95b4',
        price: 12.49,
      },
      {
        id: 18,
        name: 'Deep Blue',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils%2Fdeep-blue.jpg?alt=media&token=1bf0351e-4ec3-480d-aa45-b220e37afe13',
        price: 9.2,
      },
    ],
  },
  'bath-salts': {
    id: 3,
    title: 'Bath salts',
    routeName: 'bath-salts',
    items: [
      {
        id: 19,
        name: 'Calming Blue',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts%2Fcalming-blue.jpg?alt=media&token=fcc62d88-ab25-4ffa-b0a0-fd36a01e2978',
        price: 7.8,
      },
      {
        id: 20,
        name: 'Relax',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts%2Frelax.jpg?alt=media&token=bbeb42b7-ad66-4f4c-9561-41161982abd0',
        price: 4.99,
      },
      {
        id: 21,
        name: 'Himalayan Pink',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts%2Fhimalayan.jpg?alt=media&token=85c82d9a-8a5b-4c9b-8184-5b3c29dc0f94',
        price: 9.2,
      },
      {
        id: 22,
        name: 'Chamomile',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts%2Fchamomile.jpg?alt=media&token=26e2fd42-d039-4b23-aafe-a839a4573436',
        price: 3.49,
      },
      {
        id: 23,
        name: 'Black Lava',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts%2Fblack-lava.jpg?alt=media&token=b4748270-ec1d-4138-8a80-728fb8f9b76f',
        price: 14.89,
      },
      {
        id: 24,
        name: 'Vanilla Cinnamon',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts%2Fvanilla-cinnamon.jpg?alt=media&token=06b98359-7bf2-471f-a1d4-35a0d9c4918b',
        price: 11.25,
      },
      {
        id: 25,
        name: 'Relief & Destress',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts%2Frelief-destress.jpg?alt=media&token=280cce77-165a-46d7-9b17-0ebf87d44767',
        price: 4.99,
      },
      {
        id: 26,
        name: 'Fresh Citrus',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts%2Ffresh-citrus.jpg?alt=media&token=cc483a45-ff07-4347-80c3-e1800b39448d',
        price: 7.8,
      },
      {
        id: 27,
        name: 'Ocean Power',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts%2Focean-power.jpg?alt=media&token=e17fa251-bdde-4af8-a7a5-56c53d8f8363',
        price: 3.49,
      },
    ],
  },
  'bathroom-essentials': {
    id: 4,
    title: 'Bathroom essentials',
    routeName: 'bathroom-essentials',
    items: [
      {
        id: 28,
        name: 'Bamboo Toothbrush',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials%2Fbamboo-toothbrush.jpg?alt=media&token=020658c6-06b9-4789-a476-9efa2014df9a',
        price: 2.79,
      },
      {
        id: 29,
        name: 'Natural Toothpaste',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials%2Fnatural-toothpaste.jpg?alt=media&token=478f0ea5-edc8-4348-96a9-c4ce048f168e',
        price: 3.2,
      },
      {
        id: 30,
        name: 'Egyptian Cotton Towel',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials%2Ftowel.jpg?alt=media&token=42bebeb2-7150-4438-a2a2-a0d860b81b8b',
        price: 8.6,
      },
      {
        id: 31,
        name: 'Natural Sponge',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials%2Fnatural-sponge.jpg?alt=media&token=bb2b98f4-70b0-49e0-81d0-d201bc2928a1',
        price: 12.25,
      },
      {
        id: 32,
        name: 'Bamboo Hair Brush',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials%2Fbamboo-hairbrush.jpg?alt=media&token=3cfa55b7-01ac-489a-a545-1285748fd982',
        price: 9.99,
      },
      {
        id: 33,
        name: 'Coconut Body Oil',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials%2Fcoconut-oil.jpg?alt=media&token=07656459-d8d4-4904-b1e9-d15ce0c7117a',
        price: 11.8,
      },
      {
        id: 34,
        name: 'Stainless Steel Razor',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials%2Frazor.jpg?alt=media&token=164542d8-6da9-4511-82e5-bbb758e1abc9',
        price: 12.49,
      },
      {
        id: 35,
        name: 'Bamboo Cotton Buds',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials%2Fcotton-buds.jpg?alt=media&token=7d8d605b-74c0-4626-b66c-6910a88d365d',
        price: 5.99,
      },
      {
        id: 36,
        name: 'Hand Soap',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials%2Fhand-soap.jpg?alt=media&token=cd7888ae-e85d-4d0f-895a-7f34badab1b7',
        price: 6.25,
      },
    ],
  },
  'covid-essentials': {
    id: 5,
    title: 'COVID essentials',
    routeName: 'covid-essentials',
    items: [
      {
        id: 37,
        name: 'Respiratory Mask KN95 10pcs',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials%2Fkn95.jpg?alt=media&token=59ff0f20-b32e-4f35-b4f4-d550b208ce49',
        price: 14.79,
      },
      {
        id: 38,
        name: 'Hand Sanitizer 4pcs',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials%2Fhand-sanitizer.jpg?alt=media&token=dc5746c5-08b0-4bb6-8c2b-7a87e7c40058',
        price: 12.25,
      },
      {
        id: 39,
        name: 'Surgical Face Mask 50pcs',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials%2Fsurgical-mask.jpg?alt=media&token=101cc284-336c-44c4-83d0-af644dcfe169',
        price: 19.99,
      },
      {
        id: 40,
        name: 'Antibacterial Wipes 3 packs',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials%2Fantibacterial-wipes.jpg?alt=media&token=4e103b59-5ab6-404a-9498-7e362ae927e9',
        price: 7.49,
      },
      {
        id: 41,
        name: 'Cloth Face Mask (Red)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials%2Fface-mask-red.jpg?alt=media&token=82dc24a3-3922-44ef-87c1-03642213bc79',
        price: 4.25,
      },
      {
        id: 42,
        name: 'Cloth Face Mask (Grey)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials%2Fface-mask-grey.jpg?alt=media&token=488719b4-9e61-4efc-bc06-a590a26fdcc0',
        price: 4.25,
      },
      {
        id: 43,
        name: 'Sanitizer & Mask Set',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials%2Fsanitizer-mask-set.jpg?alt=media&token=6615904f-386b-4287-82dd-35db5ca2e8a8',
        price: 2.99,
      },
      {
        id: 44,
        name: 'Protective Gloves 50pcs',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials%2Fprotective-gloves.jpg?alt=media&token=59ffa203-a939-4a73-b049-c102b7fc4469',
        price: 11.55,
      },
      {
        id: 45,
        name: 'Face Shield',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials%2Fface-shield.jpg?alt=media&token=851a0b4d-67db-4d68-beec-56bc94309354',
        price: 8.79,
      },
    ],
  },
};

export default SHOP_DATA;
