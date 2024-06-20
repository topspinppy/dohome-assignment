import { useState } from "react";

interface IFavoriteProps extends IHeartIconProps {
  onClick(): void;
}

interface IHeartIconProps {
  width: string;
  height: string;
  toggle: boolean;
}

const HeartIcon = ({
  width = "28",
  height = "24",
  toggle = true
}: IHeartIconProps) => {
  if (toggle) {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.1233 0.200073C11.405 0.22745 9.8322 1.19407 9 2.7342C8.1678 1.19407 6.595 0.22745 4.87669 0.200073C2.07519 0.32475 -0.102043 2.74362 0.00369379 5.61389C0.00369379 9.10561 3.59172 12.9191 6.60099 15.5047C7.98798 16.6985 10.012 16.6985 11.399 15.5047C14.4083 12.9191 17.9963 9.10561 17.9963 5.61389C18.102 2.74362 15.9248 0.32475 13.1233 0.200073Z"
          fill="#ffa600"
        />
      </svg>
    );
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 24"
      fill="#ffa600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.1099 0C17.5643 0.0405583 15.2342 1.47259 14.0013 3.75426C12.7684 1.47259 10.4383 0.0405583 7.8927 0C3.74232 0.184707 0.516794 3.76821 0.673441 8.02047C0.673441 13.1934 5.98904 18.843 10.4472 22.6735C12.502 24.4422 15.5006 24.4422 17.5554 22.6735C22.0136 18.843 27.3292 13.1934 27.3292 8.02047C27.4858 3.76821 24.2603 0.184707 20.1099 0ZM16.1281 20.9336C14.899 21.9937 13.1033 21.9937 11.8743 20.9336C6.16772 16.0292 2.89462 11.3238 2.89462 8.0212C2.73658 5.02483 4.96851 2.45922 7.89257 2.27604C10.8166 2.45922 13.0486 5.02483 12.8905 8.0212C12.8905 8.64951 13.3878 9.15885 14.0012 9.15885C14.6146 9.15885 15.1118 8.64951 15.1118 8.0212C14.9538 5.02483 17.1857 2.45922 20.1098 2.27604C23.0338 2.45922 25.2658 5.02483 25.1077 8.0212C25.1077 11.3238 21.8346 16.0292 16.1281 20.929V20.9336Z"
        fill="#ffa600"
      />
    </svg>
  );
};

function Favorite(props: IFavoriteProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setToggle((prev) => !prev);
      }}
    >
      <HeartIcon {...props} toggle={toggle} />
    </div>
  );
}

export default Favorite;
