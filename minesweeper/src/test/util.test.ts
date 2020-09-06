import { renewClickedMap, getMineCount } from "../utils";

test("getMineCount test cases 1", () => {
  expect(getMineCount([0, 0, 0, 0, 1, 0, 1, 1, 0], 3, 3)).toBe("3");
});

test("getMineCount test cases 2", () => {
  expect(
    getMineCount([1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1], 3, 4)
  ).toBe("3");
});

test("renewClickedMap test cases 1", () => {
  expect(
    renewClickedMap(
      ["1", "X", "1", "2", "2", "1", "X", "1", ""],
      [0, 0, 1, 0, 0, 0, 0, 0, 0],
      4,
      3
    )
  ).toStrictEqual([0, 0, 1, 0, 1, 0, 0, 0, 0]);
});

test("renewClickedMap test cases 2", () => {
  expect(
    renewClickedMap(
      [
        "",
        "1",
        "1",
        "1",
        "",
        "1",
        "X",
        "2",
        "",
        "1",
        "3",
        "X",
        "",
        "",
        "2",
        "X",
      ],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
      4,
      4
    )
  ).toStrictEqual([1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0]);
});
