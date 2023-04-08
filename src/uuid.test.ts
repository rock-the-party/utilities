import { generateUUID, isUUID } from './uuid';


let uuids: string[] =  [
  "4af3b4a4-081d-4a9b-858c-79e994fa7a0d",
  "44c13814-5c5b-4f18-b9e9-7aa297a450cc",
  "2c28ee58-41de-475a-aa08-93cb8f8b9d9b",
  "3c212f95-8e8d-45a2-93a2-523f7d1880d9",
  "956a285a-2b47-4b8e-b7d7-820c658a7a08",
  "8f9ba9d3-1053-4633-b170-eabfd776f1d2",
  "01be7f24-29a8-4b9e-97f5-6e728e8c96fc",
  "3b4c4fc4-58f6-4de6-87b6-35f6d20c96d5",
  "54da6325-2e5d-4361-a9b9-874cd45cafa5",
  "b5d0d5c6-5e5f-4aaf-8a45-c9f68b26c7b4",
  "68c8f934-0b49-4ca4-95c8-8b9a5aee81e9",
  "b8e3f65c-b300-481c-85ce-86dfcc2d9e11",
  "5b7c5a29-17ba-481f-bd91-1a5a81cb3f09",
  "9b01d88c-062f-4565-a7a5-609fcbafdd2e",
  "8f78afba-9d12-4b95-9b8e-81a029a79ef0",
  "b6c8b6a4-7719-4dcf-a2c4-8bb94fc2c75e",
  "45db1576-0fa6-42f6-94d6-1b6e05183c3d",
  "1f46978c-083c-4a8f-9e4e-4ef43044ca25",
  "90e6d2b6-83d6-425c-8b8e-3359d246f58e",
  "b1393cb3-24ba-41a5-99cf-dc3c3be5d2ab",
  "5f5c5e54-d5a5-4a55-aedc-0c68594a8698",
  "7af49604-68ce-480c-8b8c-15ee055940aa",
  "afe526f8-8e9d-4f84-bd10-64e05e8b983c",
  "e5d3153c-b7c3-46ab-a2d9-1e1545b5a17a"
];

describe('generateUUID function', () => {
  it('should generate a string', () => {
    const uuid = generateUUID();
    expect(typeof uuid).toBe('string');
  });

  it('should generate a string in the correct format', () => {
    const uuid = generateUUID();
    console.log(uuid);
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  it('should generate unique strings', () => {
    const uiid1 = generateUUID();
    const uiid2 = generateUUID();
    expect(uiid1).not.toBe(uiid2);
  });


  it('should be valid uuids', () => {
    for (let id of uuids) {
      expect(isUUID(id)).toBe(true);
    }
  })
});