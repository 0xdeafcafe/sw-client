import { SaveDataToLocalStorage, removeFromLocalStore } from "./utils";

describe("util functions", () => {
  beforeEach(() => {
    localStorage.removeItem("session");
  });
  it("should add data to localstorage", () => {
    SaveDataToLocalStorage("testlocalstorage");

    const data = localStorage.getItem("session");

    expect(data).toEqual('["testlocalstorage"]');
  });

  it("should remove data from localstorage", () => {
    SaveDataToLocalStorage("testlocalstorage");

    const data = localStorage.getItem("session");

    expect(data).toEqual('["testlocalstorage"]');

    removeFromLocalStore("testlocalstorage");

    const scrubbedData = localStorage.getItem("session");

    expect(scrubbedData).toEqual("[]");
  });
});
