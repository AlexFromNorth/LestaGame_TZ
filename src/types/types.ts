import rootReducer from "../redux/root.reducer";

export interface VehicleItem {
  title: string;
  description: string;
  icons: {
    medium: string;
  };
  level: number;
  type: {
    title: string;
    icons: {
      default: string;
    };
  };
  nation: {
    title: string;
    color: string;
    icons: {
      small: string;
    };
  };
}

export interface InitialState {
  data: VehicleItem[] | [];
  filteredData: VehicleItem[] | [];
  filter: {
    nation: string;
    type: string;
    lvl: number;
  };
}

export type RootState = ReturnType<typeof rootReducer>;
