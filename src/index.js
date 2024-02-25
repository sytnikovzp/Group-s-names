'use strict';

const arrGroups = [
  'FE2021-5',
  'Fe2020-2',
  'FD2021',
  'fD2022-1',
  'FE2020-3',
  'FD2020/2',
  'fe2021-3',
  'FD2020$5',
  'FE2008-52',
  'Fm2008-23',
  'FM2022-1',
];

function checkGroupsNames(arrGroups) {
  const groupReg = /^(FD|FM|FE)20\d{2}(-\d+)?$/ig;
  arrGroups.forEach(function (group, i, arr) {
    if(groupReg.test(group)){
      console.log(`${group} - Success`);
      return;
    }
    console.log(`${group} - Error`);
  });
}

checkGroupsNames(arrGroups);