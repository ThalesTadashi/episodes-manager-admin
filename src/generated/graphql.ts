import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export class Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export class CreateMovieInput {
  description: Scalars['String'];
  director: Scalars['String'];
  rating?: InputMaybe<Scalars['Float']>;
  releaseYear: Scalars['Float'];
  title: Scalars['String'];
};

export class CreateUserInput {
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  profile: Scalars['String'];
};

export class Movie {
  description: Scalars['String'];
  director: Scalars['String'];
  id: Scalars['ID'];
  rating: Scalars['Float'];
  releaseYear: Scalars['Float'];
  title: Scalars['String'];
};

export class Mutation {
  /** Create Movie */
  createMovie: Movie;
  /** Create User */
  createUser: User;
  removeUser: Movie;
  updateUser: Movie;
};


export class MutationCreateMovieArgs {
  data: CreateMovieInput;
};


export class MutationCreateUserArgs {
  data: CreateUserInput;
};


export class MutationRemoveUserArgs {
  id: Scalars['String'];
};


export class MutationUpdateUserArgs {
  data: UpdateMovieInput;
};

export class Query {
  movie: Movie;
  /** Return All Movies */
  movies: Array<Movie>;
  user: User;
  /** Return All Users */
  users: Array<User>;
};


export class QueryMovieArgs {
  id: Scalars['String'];
};


export class QueryUserArgs {
  id: Scalars['String'];
};

export class UpdateMovieInput {
  description?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  rating?: InputMaybe<Scalars['Float']>;
  releaseYear?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export class User {
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  profile: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserFragment = { id: string, name: string, email: string };

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: { id: string, name: string, email: string } };

export const UserFragmentDoc = gql`
    fragment User on User {
  id
  name
  email
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data) {
    id
    name
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }