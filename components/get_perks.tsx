export async function getManifest() {
  const api_key = "e386b2d1848a40e389f2fc5b9740c741";
  const url = "https://www.bungie.net/Platform/Destiny2/Manifest/";
  const headers = {
    "X-API-Key": api_key,
  };

  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  const data = await response.json();
  const destinySandboxPerkDefinition =
    data.Response.jsonWorldComponentContentPaths.en.DestinySandboxPerkDefinition;
                                              
  const url_v2 = "https://www.bungie.net" + "/common/destiny2_content/json/zh-chs/DestinySandboxPerkDefinition-180d19ec-32f8-4b44-8b2a-fcc5163f4db0.json";
  const response_v2 = await fetch(url_v2);
  const data_v2 = await response_v2.json();
  
  return data_v2;
}
