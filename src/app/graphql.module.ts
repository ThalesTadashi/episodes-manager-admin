import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache, DefaultOptions} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';
import {environment} from '../environments/environment';
import Swal from "sweetalert2";


const uri = "http://localhost:3000/graphql"

const error = onError(({graphQLErrors, networkError}) => { // need help on linking this with graphql module
  console.log('networkError');
  console.log(networkError);
  if (graphQLErrors) {
    if (graphQLErrors[0]?.extensions?.response) {
      window.location.href = '/logout';
    } else if (graphQLErrors[0].message) {
      Swal.fire({
        title: 'Atenção',
        html: graphQLErrors[0].message,
        icon: 'warning',
        confirmButtonColor: '#032E58',
      });
    }
    graphQLErrors.map(({message, locations, path}) => {
        Swal.fire({
          title: 'Atenção',
          html: message,
          icon: 'warning',
          confirmButtonColor: '#032E58',
        });
        // console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      },
    );
  }
  if (networkError) {
    const e: any = networkError;
    if (e.status === 401) {
      // @ts-ignore
      this.route.navigate(['/']);
    }
 
  }
});

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'none',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'none',
    },
    mutate: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'none',
    }
  }
  return {
    link: error.concat(httpLink.create({ uri })), // httpLink.create({uri}),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
