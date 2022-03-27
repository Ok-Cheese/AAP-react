export default function checkFilterCondition(conditionType, item, filterState) {
  if (conditionType === 'role') {
    return filterState[item.role];
  } else if (conditionType === 'existence') {
    const cond1 = +item.existence && filterState["현존"];
    const cond2 = !+item.existence && filterState["소실"];
    return (cond1 || cond2);
  } else if (conditionType === "heritage") {
    const cond1 = +item.heritage && filterState["문화재"];
    const cond2 = !+item.heritage && filterState["비문화재"];
    return (cond1 || cond2);
  }
}