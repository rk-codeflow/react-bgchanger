const buttons = [
  {
    id: 1,
    title: "Red",
    color: "red",
  },
  {
    id: 2,
    title: "Lightskyblue",
    color: "lightskyblue",
  },
  {
    id: 3,
    title: "Green",
    color: "green",
  },
  {
    id: 4,
    title: "Blue",
    color: "blue",
  },
  {
    id: 5,
    title: "Purple",
    color: "purple",
  },
  {
    id: 6,
    title: "Teal",
    color: "teal",
  },
  {
    id: 7,
    title: "Tomato",
    color: "tomato",
  },
  {
    id: 8,
    title: "Fuchsia",
    color: "fuchsia",
  },
];

export const Button = () => {
  const changeBackground = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="btn-wrapper">
      {buttons.map((button) => {
        return (
          <button
            key={button.id}
            onClick={() => changeBackground(button.color)}
            style={{ backgroundColor: button.color }}
          >
            {button.title}
          </button>
        );
      })}
    </div>
  );
};
