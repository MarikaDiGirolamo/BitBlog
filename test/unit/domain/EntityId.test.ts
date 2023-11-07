import { EntityId } from "../../../src/domain/EntityId";

test("Can create Entity with valid uuid", () => {
    const uuid = "2360e3ca-be49-44eb-91e1-a8463f432913";
    expect(() => EntityId.fromString(uuid)).not.toThrow(Error);
});

test("Can't create Entity with invalid id", () => {
    expect(() => EntityId.fromString("Invalid id")).toThrow(Error);
});