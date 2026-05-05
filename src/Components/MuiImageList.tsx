import { Stack, ImageList, ImageListItem ,Box,ImageListItemBar} from "@mui/material";

function MuiImageList() {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>

       <ImageList  variant='woven' sx={{ width: 500, height: 450 }} cols={3} gap={8}>
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
                loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450,overflowY:'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData3.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
                loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Box>

    </Stack>
  );
}

const itemData = [
   {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Sea",
  },
  {
    img: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Nature",
  },
  {
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "River",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Waterfall",
  },
  {
    img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    title: "City",
  },
  {
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    title: "Road",
  },
];

const itemData2 = [
  {
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    title: "Sky",
  },
  {
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    title: "Bridge",
  },
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Sunset",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    title: "Flowers",
  },
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Mountains",
  },
  {
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    title: "Road",
  },
  {
    img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    title: "City",
  },
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Lake",
  },
];

const itemData3 = [
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    title: "Snow Mountains",
  },
  {
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    title: "Flowers",
  },
  {
    img: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
    title: "Bridge",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c",
    title: "Night Sky",
  },
  {
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    title: "Laptop Workspace",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Coding",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Office Desk",
  },
  {
    img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Sunset",
  },
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Lake",
  },
  {
    img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    title: "Camera",
  },
];
export default MuiImageList;