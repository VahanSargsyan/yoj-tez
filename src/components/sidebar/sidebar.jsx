import { ListItemButton } from "@mui/material";

import ListItemText from '@mui/material/ListItemText';
import { useAppSelector } from "../../app/hooks";
import { selectHistory } from "../../store/evaluateSlice";

const Sidebar = () => {
  const history = useAppSelector(selectHistory);
  return (
    <div>
      <h3>Sidebar</h3>
      {
        history.map(site => {
          return (
            <ListItemButton>
              <ListItemText primary={site.link} />
            </ListItemButton>
          )
        })
      }
    </div>
  )
}

export default Sidebar;