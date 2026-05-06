import { TableContainer,Table,TableHead,TableBody,TableRow, TableCell,Paper } from "@mui/material";
function MuiTables() {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
    <Table aria-label="simple" stickyHeader>
        <TableHead>
            <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>First_name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Last_name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {tableData.map(row => (
                <TableRow
                     key={row.id}
                      sx={{ '&:last-child td, &:last-child th': {border: 0 }
   }}
>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    </TableContainer>
  );
}
const tableData = [{
  "id": 1,
  "first_name": "Saw",
  "last_name": "Pierrepont",
  "email": "spierrepont0@phpbb.com",
  "gender": "Male",
  "ip_address": "250.77.71.157"
}, {
  "id": 2,
  "first_name": "Marguerite",
  "last_name": "Drinkel",
  "email": "mdrinkel1@archive.org",
  "gender": "Non-binary",
  "ip_address": "195.178.174.197"
}, {
  "id": 3,
  "first_name": "Anabelle",
  "last_name": "Tregona",
  "email": "atregona2@de.vu",
  "gender": "Non-binary",
  "ip_address": "243.195.92.218"
}, {
  "id": 4,
  "first_name": "Elnora",
  "last_name": "Steptoe",
  "email": "esteptoe3@japanpost.jp",
  "gender": "Female",
  "ip_address": "72.32.223.166"
}, {
  "id": 5,
  "first_name": "Jacky",
  "last_name": "Lamers",
  "email": "jlamers4@noaa.gov",
  "gender": "Male",
  "ip_address": "9.0.46.114"
}, {
  "id": 6,
  "first_name": "Teodor",
  "last_name": "Humerstone",
  "email": "thumerstone5@nydailynews.com",
  "gender": "Bigender",
  "ip_address": "184.249.28.114"
}, {
  "id": 7,
  "first_name": "Katy",
  "last_name": "Chadburn",
  "email": "kchadburn6@feedburner.com",
  "gender": "Female",
  "ip_address": "228.3.198.128"
}, {
  "id": 8,
  "first_name": "Ximenes",
  "last_name": "Ferie",
  "email": "xferie7@narod.ru",
  "gender": "Male",
  "ip_address": "67.94.10.156"
}, {
  "id": 9,
  "first_name": "Tulley",
  "last_name": "Cleen",
  "email": "tcleen8@jugem.jp",
  "gender": "Male",
  "ip_address": "148.29.242.57"
}, {
  "id": 10,
  "first_name": "Wood",
  "last_name": "Raffin",
  "email": "wraffin9@typepad.com",
  "gender": "Male",
  "ip_address": "70.61.147.187"
}]
export default MuiTables;