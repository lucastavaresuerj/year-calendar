const weekday = {
  backgroundColor: null,
  textColor: null,
  textStyle: null,
  fontWeight: null,
  size: null,
};

const defaultMonth = {
  header: {
    rounded: true,
    backgroundColor: null,
    space: null,
    number: {
      showNumber: false,
      side: "RIGHT",
    },
    monthName: {
      aling: null,
      size: null,
      style: null,
      fontWeight: null,
      textColor: null,
    },
  },
  monthDay: {
    config: null,
  },
};

export function makeObjectCalendar() {
  return {
    name: "",
    index: "",
    year: 2022,
    colNumber: 3,
    title: {
      name: "",
      config: {
        aling: null,
        size: null,
        style: null,
        fontWeight: null,
        textColor: null,
      },
    },
    defaultMonth: {
      ...defaultMonth,
      weekday,
    },
    months: Array(12).fill({
      ...defaultMonth,
      weekdays: Array(7).fill(weekday),
    }),
  };
}

export function makeObjectCardPreview() {
  return {
    name: "",
    index: "",
    year: 2022,
    title: {
      name: "",
      config: {
        aling: null,
        size: null,
        style: null,
        fontWeight: null,
        textColor: null,
      },
    },
    month: {
      ...defaultMonth,
      weekdays: Array(7).fill(weekday),
    },
  };
}
