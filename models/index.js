// My mission in this file is to leave more comments than there actually is code.  Clearly this file is here as a pro forma (and necessary) measure, in that we have the same framework serve an application lattice no matter how small the program is.  While it may not make sense to have an index file point only to one other (rather smallish) javascript file, it follows the form of OOP.  If this program were to be expanded, as inevitably happens, then we don't have to go in there and break apart larger and larger files into logical compact morsels that we had started with.
module.exports = {
  Book: require("./book")
};

//  Further, note that we need to have this little tiny 40 char redirect folder because by default our react application (and many others) are going to look for that file as a matter how it is able to operate.  Certain files must be in certaion locations unless you want to tweak configuration settings in the package.json file (which you do not)  Remember to have server.js to kick the thing off, and an index.js in each folder that the root directory of your application references.

// 🌎  It is cool you can put little icons like this in here

// check out how you can cURL into this weather website and get local weather: http://wttr.in/seattle
// Weather report: Seattle, United States of America

//     \  /       Partly cloudy
//   _ /"".-.     66 °F
//     \_(   ).   ↘ 0 mph
//     /(___(__)  9 mi
//                0.0 in
//                                                        ┌─────────────┐
// ┌──────────────────────────────┬───────────────────────┤  Tue 30 Apr ├───────────────────────┬──────────────────────────────┐
// │            Morning           │             Noon      └──────┬──────┘     Evening           │             Night            │
// ├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
// │    \  /       Partly cloudy  │    \  /       Partly cloudy  │    \  /       Partly cloudy  │    \  /       Partly cloudy  │
// │  _ /"".-.     53..55 °F      │  _ /"".-.     62 °F          │  _ /"".-.     64 °F          │  _ /"".-.     59 °F          │
// │    \_(   ).   ↖ 3 mph        │    \_(   ).   ↘ 6-7 mph      │    \_(   ).   ↘ 6-8 mph      │    \_(   ).   → 3-6 mph      │
// │    /(___(__)  12 mi          │    /(___(__)  12 mi          │    /(___(__)  11 mi          │    /(___(__)  12 mi          │
// │               0.0 in | 0%    │               0.0 in | 0%    │               0.0 in | 0%    │               0.0 in | 0%    │
// └──────────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘
//                                                        ┌─────────────┐
// ┌──────────────────────────────┬───────────────────────┤  Wed 01 May ├───────────────────────┬──────────────────────────────┐
// │            Morning           │             Noon      └──────┬──────┘     Evening           │             Night            │
// ├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
// │    \  /       Partly cloudy  │    \  /       Partly cloudy  │    \  /       Partly cloudy  │    \  /       Partly cloudy  │
// │  _ /"".-.     50..51 °F      │  _ /"".-.     59..60 °F      │  _ /"".-.     66 °F          │  _ /"".-.     60 °F          │
// │    \_(   ).   ↑ 6 mph        │    \_(   ).   ↑ 6-8 mph      │    \_(   ).   ↗ 4-5 mph      │    \_(   ).   ↗ 4-7 mph      │
// │    /(___(__)  12 mi          │    /(___(__)  12 mi          │    /(___(__)  12 mi          │    /(___(__)  11 mi          │
// │               0.0 in | 0%    │               0.0 in | 0%    │               0.0 in | 0%    │               0.0 in | 0%    │
// └──────────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘
//                                                        ┌─────────────┐
// ┌──────────────────────────────┬───────────────────────┤  Thu 02 May ├───────────────────────┬──────────────────────────────┐
// │            Morning           │             Noon      └──────┬──────┘     Evening           │             Night            │
// ├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
// │  _`/"".-.     Patchy rain po…│    \  /       Partly cloudy  │    \  /       Partly cloudy  │    \  /       Partly cloudy  │
// │   ,\_(   ).   44..48 °F      │  _ /"".-.     51..53 °F      │  _ /"".-.     60 °F          │  _ /"".-.     51..53 °F      │
// │    /(___(__)  ↑ 7-8 mph      │    \_(   ).   ↑ 7-8 mph      │    \_(   ).   ↑ 3-4 mph      │    \_(   ).   ↑ 2-4 mph      │
// │      ‘ ‘ ‘ ‘  11 mi          │    /(___(__)  11 mi          │    /(___(__)  12 mi          │    /(___(__)  11 mi          │
// │     ‘ ‘ ‘ ‘   0.0 in | 77%   │               0.0 in | 44%   │               0.0 in | 0%    │               0.0 in | 0%    │
// └──────────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘
