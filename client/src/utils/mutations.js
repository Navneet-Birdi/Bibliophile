import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation saveBookToUser($title: String!, $image: String, $isbn: String, $description: String, $authors: [String]) {
    saveBookToUser(title: $title, image: $image, isbn: $isbn, description: $description, authors: $authors) {
      token
      user {
        _id
        username
      }
    }
  }
`;
