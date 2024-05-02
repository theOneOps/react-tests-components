export default function getGradient(coolors) {
  const linearGradientValue: string = coolors.content.colors.reduce(
    (acc, obj, index) =>
      acc +
      `${obj.nameColor} ${
        index == coolors.content.nbColors - 1
          ? `${obj.position}%`
          : `${obj.position}%, `
      }`,
    ""
  );

  return `linear-gradient(${coolors.content.globalAngleContainer}deg, ${linearGradientValue})`;
}
