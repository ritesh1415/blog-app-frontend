import React from 'react';
import { Typography, Button, IconButton, Card, CardContent, Box } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function BasicCard({ title, image, description, username, time, id, isUser }) {
  const navigate=useNavigate();

  const handleEdit = () => {
    // Implement the handleEdit functionality
    navigate(`/blog-details/${id}`);
    console.log('Edit clicked');
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`http://localhost:8080/delete/${id}`);
      if (data?.success) {
        alert("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card sx={{ width: '40%', margin: 'auto', mt: 2, padding: 2, boxShadow: '5px 5px 10px #ccc' }}>
      <div>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="small"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          {/* <BookmarkAdd /> */}
        </IconButton>
      </div>

      <CardContent>
        <div>
          <Typography variant="body2">
            username: {username} title: {title} description: {description}
          </Typography>
          <Typography>{time}</Typography>
          <Typography variant="h6">
            <img src={image} alt="Card Image" />
          </Typography>
        </div>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>

      {/* {isUser && ( */}
  <Box display="flex">
    <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}>
      <Button color="info">Edit</Button>
    </IconButton>
    <IconButton onClick={handleDelete}>
      <Button color="error">Delete</Button>
    </IconButton>
  </Box>
{/* )} */}

    </Card>
  );
}
