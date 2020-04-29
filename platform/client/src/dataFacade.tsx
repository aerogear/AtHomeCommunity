/* tslint:disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  DateTime: any;
};

export enum ActionStatus {
  Assigned = 'ASSIGNED',
  Completed = 'COMPLETED'
}

export enum ActionType {
  PhoneCall = 'PHONE_CALL',
  Delivery = 'DELIVERY'
}


/**
 * @model
 * @crud.update: false
 * @crud.delete: false
 */
export type DistributionCentre = {
   __typename?: 'DistributionCentre';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  stockInformation?: Maybe<Scalars['JSON']>;
  /** @oneToMany field: 'distributionCentre', key: 'distributionCentreId' */
  actions: Array<Maybe<VolunteerAction>>;
  version?: Maybe<Scalars['Int']>;
};

export type DistributionCentreInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  stockInformation?: Maybe<Scalars['JSON']>;
  version?: Maybe<Scalars['Int']>;
};


export type Mutation = {
   __typename?: 'Mutation';
  createDistributionCentre: DistributionCentre;
  createVolunteer: Volunteer;
  updateVolunteer: Volunteer;
  createVolunteerAction: VolunteerAction;
  updateVolunteerAction: VolunteerAction;
  deleteVolunteerAction: VolunteerAction;
  createReciever: Recipient;
  updateReciever: Recipient;
};


export type MutationCreateDistributionCentreArgs = {
  input?: Maybe<DistributionCentreInput>;
};


export type MutationCreateVolunteerArgs = {
  input?: Maybe<VolunteerInput>;
};


export type MutationUpdateVolunteerArgs = {
  input?: Maybe<VolunteerInput>;
};


export type MutationCreateVolunteerActionArgs = {
  input?: Maybe<VolunteerActionInput>;
};


export type MutationUpdateVolunteerActionArgs = {
  input?: Maybe<VolunteerActionInput>;
};


export type MutationDeleteVolunteerActionArgs = {
  input?: Maybe<VolunteerActionInput>;
};


export type MutationCreateRecieverArgs = {
  input?: Maybe<RecieverInput>;
};


export type MutationUpdateRecieverArgs = {
  input?: Maybe<RecieverInput>;
};

export type Query = {
   __typename?: 'Query';
  findAllDistributionCentres: Array<Maybe<DistributionCentre>>;
  findDistributionCentres: Array<Maybe<DistributionCentre>>;
  findAllVolunteers: Array<Maybe<Volunteer>>;
  findVolunteers: Array<Maybe<Volunteer>>;
  findAllVolunteerActions: Array<Maybe<VolunteerAction>>;
  findVolunteerActions: Array<Maybe<VolunteerAction>>;
  findAllRecievers: Array<Maybe<Recipient>>;
  findRecievers: Array<Maybe<Recipient>>;
};


export type QueryFindAllDistributionCentresArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindDistributionCentresArgs = {
  fields?: Maybe<DistributionCentreInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindAllVolunteersArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindVolunteersArgs = {
  fields?: Maybe<VolunteerInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindAllVolunteerActionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindVolunteerActionsArgs = {
  fields?: Maybe<VolunteerActionInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindAllRecieversArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindRecieversArgs = {
  fields?: Maybe<RecieverInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

/**
 * @model
 * @crud.delete: false
 */
export type Recipient = {
   __typename?: 'Recipient';
  id: Scalars['ID'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  prefferedProducts?: Maybe<Scalars['String']>;
  /** @oneToMany field: 'recipient', key: 'recieverId' */
  actions?: Maybe<Array<Maybe<VolunteerAction>>>;
  version?: Maybe<Scalars['Int']>;
};

export type RecieverInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  prefferedProducts?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type Subscription = {
   __typename?: 'Subscription';
  newDistributionCentre: DistributionCentre;
  newVolunteer: Volunteer;
  updatedVolunteer: Volunteer;
  newVolunteerAction: VolunteerAction;
  updatedVolunteerAction: VolunteerAction;
  deletedVolunteerAction: VolunteerAction;
  newReciever: Recipient;
  updatedReciever: Recipient;
};


export type SubscriptionNewDistributionCentreArgs = {
  input?: Maybe<DistributionCentreInput>;
};


export type SubscriptionNewVolunteerArgs = {
  input?: Maybe<VolunteerInput>;
};


export type SubscriptionUpdatedVolunteerArgs = {
  input?: Maybe<VolunteerInput>;
};


export type SubscriptionNewVolunteerActionArgs = {
  input?: Maybe<VolunteerActionInput>;
};


export type SubscriptionUpdatedVolunteerActionArgs = {
  input?: Maybe<VolunteerActionInput>;
};


export type SubscriptionDeletedVolunteerActionArgs = {
  input?: Maybe<VolunteerActionInput>;
};


export type SubscriptionNewRecieverArgs = {
  input?: Maybe<RecieverInput>;
};


export type SubscriptionUpdatedRecieverArgs = {
  input?: Maybe<RecieverInput>;
};

/**
 * @model
 * @crud.delete: false
 */
export type Volunteer = {
   __typename?: 'Volunteer';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  canPhoneCall: Scalars['Boolean'];
  canDeliver: Scalars['Boolean'];
  /** @oneToMany field: 'volunteer', key: 'volunteerId' */
  actions?: Maybe<Array<Maybe<VolunteerAction>>>;
  version?: Maybe<Scalars['Int']>;
};

/**
 * Represents action that is assigned to volunteer
 * @model
 */
export type VolunteerAction = {
   __typename?: 'VolunteerAction';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  products: Scalars['String'];
  status?: Maybe<ActionStatus>;
  actionType?: Maybe<ActionType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** @manyToOne field: 'actions', key: 'volunteerId' */
  volunteer?: Maybe<Volunteer>;
  /**
   * Workaround for https://github.com/aerogear/graphback/issues/1167
   * @manyToOne field: 'actions', key: 'recieverId'
   */
  recipient?: Maybe<Recipient>;
  /** @manyToOne field: 'actions', key: 'distributionCentreId' */
  distributionCentre?: Maybe<DistributionCentre>;
  version?: Maybe<Scalars['Int']>;
};

export type VolunteerActionInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  status?: Maybe<ActionStatus>;
  actionType?: Maybe<ActionType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  recieverId?: Maybe<Scalars['ID']>;
  volunteerId?: Maybe<Scalars['ID']>;
  distributionCentreId?: Maybe<Scalars['ID']>;
  version?: Maybe<Scalars['Int']>;
};

export type VolunteerInput = {
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  canPhoneCall?: Maybe<Scalars['Boolean']>;
  canDeliver?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
};

export type DistributionCentreFieldsFragment = (
  { __typename?: 'DistributionCentre' }
  & Pick<DistributionCentre, 'id' | 'name' | 'address' | 'address2' | 'city' | 'lat' | 'long' | 'stockInformation'>
);

export type DistributionCentreExpandedFieldsFragment = (
  { __typename?: 'DistributionCentre' }
  & Pick<DistributionCentre, 'id' | 'name' | 'address' | 'address2' | 'city' | 'lat' | 'long' | 'stockInformation'>
);

export type RecieverFieldsFragment = (
  { __typename?: 'Recipient' }
  & Pick<Recipient, 'id' | 'name' | 'phone' | 'address' | 'createdAt' | 'prefferedProducts'>
);

export type RecieverExpandedFieldsFragment = (
  { __typename?: 'Recipient' }
  & Pick<Recipient, 'id' | 'name' | 'phone' | 'address' | 'createdAt' | 'prefferedProducts'>
  & { actions?: Maybe<Array<Maybe<(
    { __typename?: 'VolunteerAction' }
    & Pick<VolunteerAction, 'id' | 'title' | 'description' | 'products' | 'status' | 'actionType' | 'createdAt'>
  )>>> }
);

export type VolunteerFieldsFragment = (
  { __typename?: 'Volunteer' }
  & Pick<Volunteer, 'id' | 'firstName' | 'lastName' | 'email' | 'username' | 'address1' | 'address2' | 'city' | 'dateOfBirth' | 'canPhoneCall' | 'canDeliver'>
);

export type VolunteerActionFieldsFragment = (
  { __typename?: 'VolunteerAction' }
  & Pick<VolunteerAction, 'id' | 'title' | 'description' | 'products' | 'status' | 'actionType' | 'createdAt'>
);

export type VolunteerActionExpandedFieldsFragment = (
  { __typename?: 'VolunteerAction' }
  & Pick<VolunteerAction, 'id' | 'title' | 'description' | 'products' | 'status' | 'actionType' | 'createdAt'>
  & { recipient?: Maybe<(
    { __typename?: 'Recipient' }
    & Pick<Recipient, 'id' | 'name' | 'phone' | 'address' | 'createdAt' | 'prefferedProducts'>
  )>, volunteer?: Maybe<(
    { __typename?: 'Volunteer' }
    & Pick<Volunteer, 'id' | 'firstName' | 'lastName' | 'email' | 'username' | 'address1' | 'address2' | 'city' | 'dateOfBirth' | 'canPhoneCall' | 'canDeliver'>
  )>, distributionCentre?: Maybe<(
    { __typename?: 'DistributionCentre' }
    & Pick<DistributionCentre, 'id' | 'name' | 'address' | 'address2' | 'city' | 'lat' | 'long' | 'stockInformation'>
  )> }
);

export type VolunteerExpandedFieldsFragment = (
  { __typename?: 'Volunteer' }
  & Pick<Volunteer, 'id' | 'firstName' | 'lastName' | 'email' | 'username' | 'address1' | 'address2' | 'city' | 'dateOfBirth' | 'canPhoneCall' | 'canDeliver'>
  & { actions?: Maybe<Array<Maybe<(
    { __typename?: 'VolunteerAction' }
    & Pick<VolunteerAction, 'id' | 'title' | 'description' | 'products' | 'status' | 'actionType' | 'createdAt'>
  )>>> }
);

export type CreateVolunteerMutationVariables = {
  input: VolunteerInput;
};


export type CreateVolunteerMutation = (
  { __typename?: 'Mutation' }
  & { createVolunteer: (
    { __typename?: 'Volunteer' }
    & VolunteerFieldsFragment
  ) }
);

export type UpdateVolunteerMutationVariables = {
  input: VolunteerInput;
};


export type UpdateVolunteerMutation = (
  { __typename?: 'Mutation' }
  & { updateVolunteer: (
    { __typename?: 'Volunteer' }
    & VolunteerFieldsFragment
  ) }
);

export type UpdateVolunteerActionMutationVariables = {
  input: VolunteerActionInput;
};


export type UpdateVolunteerActionMutation = (
  { __typename?: 'Mutation' }
  & { updateVolunteerAction: (
    { __typename?: 'VolunteerAction' }
    & VolunteerActionFieldsFragment
  ) }
);

export type FindActiveVolunteerQueryVariables = {
  username: Scalars['String'];
};


export type FindActiveVolunteerQuery = (
  { __typename?: 'Query' }
  & { findVolunteers: Array<Maybe<(
    { __typename?: 'Volunteer' }
    & VolunteerFieldsFragment
  )>> }
);

export type FindMyVolunteerActionsQueryVariables = {
  volunteerId: Scalars['ID'];
  status?: Maybe<ActionStatus>;
};


export type FindMyVolunteerActionsQuery = (
  { __typename?: 'Query' }
  & { findVolunteerActions: Array<Maybe<(
    { __typename?: 'VolunteerAction' }
    & VolunteerActionFieldsFragment
  )>> }
);

export type FindVolunteerActionQueryVariables = {
  id: Scalars['ID'];
};


export type FindVolunteerActionQuery = (
  { __typename?: 'Query' }
  & { findVolunteerActions: Array<Maybe<(
    { __typename?: 'VolunteerAction' }
    & VolunteerActionExpandedFieldsFragment
  )>> }
);

export const DistributionCentreFieldsFragmentDoc = gql`
    fragment DistributionCentreFields on DistributionCentre {
  id
  name
  address
  address2
  city
  lat
  long
  stockInformation
}
    `;
export const DistributionCentreExpandedFieldsFragmentDoc = gql`
    fragment DistributionCentreExpandedFields on DistributionCentre {
  id
  name
  address
  address2
  city
  lat
  long
  stockInformation
}
    `;
export const RecieverFieldsFragmentDoc = gql`
    fragment RecieverFields on Recipient {
  id
  name
  phone
  address
  createdAt
  prefferedProducts
}
    `;
export const RecieverExpandedFieldsFragmentDoc = gql`
    fragment RecieverExpandedFields on Recipient {
  id
  name
  phone
  address
  createdAt
  prefferedProducts
  actions {
    id
    title
    description
    products
    status
    actionType
    createdAt
  }
}
    `;
export const VolunteerFieldsFragmentDoc = gql`
    fragment VolunteerFields on Volunteer {
  id
  firstName
  lastName
  email
  username
  address1
  address2
  city
  dateOfBirth
  canPhoneCall
  canDeliver
}
    `;
export const VolunteerActionFieldsFragmentDoc = gql`
    fragment VolunteerActionFields on VolunteerAction {
  id
  title
  description
  products
  status
  actionType
  createdAt
}
    `;
export const VolunteerActionExpandedFieldsFragmentDoc = gql`
    fragment VolunteerActionExpandedFields on VolunteerAction {
  id
  title
  description
  products
  status
  actionType
  createdAt
  recipient {
    id
    name
    phone
    address
    createdAt
    prefferedProducts
  }
  volunteer {
    id
    firstName
    lastName
    email
    username
    address1
    address2
    city
    dateOfBirth
    canPhoneCall
    canDeliver
  }
  distributionCentre {
    id
    name
    address
    address2
    city
    lat
    long
    stockInformation
  }
}
    `;
export const VolunteerExpandedFieldsFragmentDoc = gql`
    fragment VolunteerExpandedFields on Volunteer {
  id
  firstName
  lastName
  email
  username
  address1
  address2
  city
  dateOfBirth
  canPhoneCall
  canDeliver
  actions {
    id
    title
    description
    products
    status
    actionType
    createdAt
  }
}
    `;
export const CreateVolunteerDocument = gql`
    mutation createVolunteer($input: VolunteerInput!) {
  createVolunteer(input: $input) {
    ...VolunteerFields
  }
}
    ${VolunteerFieldsFragmentDoc}`;
export type CreateVolunteerMutationFn = ApolloReactCommon.MutationFunction<CreateVolunteerMutation, CreateVolunteerMutationVariables>;

/**
 * __useCreateVolunteerMutation__
 *
 * To run a mutation, you first call `useCreateVolunteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVolunteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVolunteerMutation, { data, loading, error }] = useCreateVolunteerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVolunteerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateVolunteerMutation, CreateVolunteerMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateVolunteerMutation, CreateVolunteerMutationVariables>(CreateVolunteerDocument, baseOptions);
      }
export type CreateVolunteerMutationHookResult = ReturnType<typeof useCreateVolunteerMutation>;
export type CreateVolunteerMutationResult = ApolloReactCommon.MutationResult<CreateVolunteerMutation>;
export type CreateVolunteerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateVolunteerMutation, CreateVolunteerMutationVariables>;
export const UpdateVolunteerDocument = gql`
    mutation updateVolunteer($input: VolunteerInput!) {
  updateVolunteer(input: $input) {
    ...VolunteerFields
  }
}
    ${VolunteerFieldsFragmentDoc}`;
export type UpdateVolunteerMutationFn = ApolloReactCommon.MutationFunction<UpdateVolunteerMutation, UpdateVolunteerMutationVariables>;

/**
 * __useUpdateVolunteerMutation__
 *
 * To run a mutation, you first call `useUpdateVolunteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVolunteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVolunteerMutation, { data, loading, error }] = useUpdateVolunteerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVolunteerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateVolunteerMutation, UpdateVolunteerMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateVolunteerMutation, UpdateVolunteerMutationVariables>(UpdateVolunteerDocument, baseOptions);
      }
export type UpdateVolunteerMutationHookResult = ReturnType<typeof useUpdateVolunteerMutation>;
export type UpdateVolunteerMutationResult = ApolloReactCommon.MutationResult<UpdateVolunteerMutation>;
export type UpdateVolunteerMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVolunteerMutation, UpdateVolunteerMutationVariables>;
export const UpdateVolunteerActionDocument = gql`
    mutation updateVolunteerAction($input: VolunteerActionInput!) {
  updateVolunteerAction(input: $input) {
    ...VolunteerActionFields
  }
}
    ${VolunteerActionFieldsFragmentDoc}`;
export type UpdateVolunteerActionMutationFn = ApolloReactCommon.MutationFunction<UpdateVolunteerActionMutation, UpdateVolunteerActionMutationVariables>;

/**
 * __useUpdateVolunteerActionMutation__
 *
 * To run a mutation, you first call `useUpdateVolunteerActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVolunteerActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVolunteerActionMutation, { data, loading, error }] = useUpdateVolunteerActionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVolunteerActionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateVolunteerActionMutation, UpdateVolunteerActionMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateVolunteerActionMutation, UpdateVolunteerActionMutationVariables>(UpdateVolunteerActionDocument, baseOptions);
      }
export type UpdateVolunteerActionMutationHookResult = ReturnType<typeof useUpdateVolunteerActionMutation>;
export type UpdateVolunteerActionMutationResult = ApolloReactCommon.MutationResult<UpdateVolunteerActionMutation>;
export type UpdateVolunteerActionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVolunteerActionMutation, UpdateVolunteerActionMutationVariables>;
export const FindActiveVolunteerDocument = gql`
    query findActiveVolunteer($username: String!) {
  findVolunteers(fields: {username: $username}, limit: 1) {
    ...VolunteerFields
  }
}
    ${VolunteerFieldsFragmentDoc}`;

/**
 * __useFindActiveVolunteerQuery__
 *
 * To run a query within a React component, call `useFindActiveVolunteerQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindActiveVolunteerQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindActiveVolunteerQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFindActiveVolunteerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindActiveVolunteerQuery, FindActiveVolunteerQueryVariables>) {
        return ApolloReactHooks.useQuery<FindActiveVolunteerQuery, FindActiveVolunteerQueryVariables>(FindActiveVolunteerDocument, baseOptions);
      }
export function useFindActiveVolunteerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindActiveVolunteerQuery, FindActiveVolunteerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindActiveVolunteerQuery, FindActiveVolunteerQueryVariables>(FindActiveVolunteerDocument, baseOptions);
        }
export type FindActiveVolunteerQueryHookResult = ReturnType<typeof useFindActiveVolunteerQuery>;
export type FindActiveVolunteerLazyQueryHookResult = ReturnType<typeof useFindActiveVolunteerLazyQuery>;
export type FindActiveVolunteerQueryResult = ApolloReactCommon.QueryResult<FindActiveVolunteerQuery, FindActiveVolunteerQueryVariables>;
export const FindMyVolunteerActionsDocument = gql`
    query findMyVolunteerActions($volunteerId: ID!, $status: ActionStatus) {
  findVolunteerActions(fields: {volunteerId: $volunteerId, status: $status}) {
    ...VolunteerActionFields
  }
}
    ${VolunteerActionFieldsFragmentDoc}`;

/**
 * __useFindMyVolunteerActionsQuery__
 *
 * To run a query within a React component, call `useFindMyVolunteerActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyVolunteerActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyVolunteerActionsQuery({
 *   variables: {
 *      volunteerId: // value for 'volunteerId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useFindMyVolunteerActionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindMyVolunteerActionsQuery, FindMyVolunteerActionsQueryVariables>) {
        return ApolloReactHooks.useQuery<FindMyVolunteerActionsQuery, FindMyVolunteerActionsQueryVariables>(FindMyVolunteerActionsDocument, baseOptions);
      }
export function useFindMyVolunteerActionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindMyVolunteerActionsQuery, FindMyVolunteerActionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindMyVolunteerActionsQuery, FindMyVolunteerActionsQueryVariables>(FindMyVolunteerActionsDocument, baseOptions);
        }
export type FindMyVolunteerActionsQueryHookResult = ReturnType<typeof useFindMyVolunteerActionsQuery>;
export type FindMyVolunteerActionsLazyQueryHookResult = ReturnType<typeof useFindMyVolunteerActionsLazyQuery>;
export type FindMyVolunteerActionsQueryResult = ApolloReactCommon.QueryResult<FindMyVolunteerActionsQuery, FindMyVolunteerActionsQueryVariables>;
export const FindVolunteerActionDocument = gql`
    query findVolunteerAction($id: ID!) {
  findVolunteerActions(fields: {id: $id}) {
    ...VolunteerActionExpandedFields
  }
}
    ${VolunteerActionExpandedFieldsFragmentDoc}`;

/**
 * __useFindVolunteerActionQuery__
 *
 * To run a query within a React component, call `useFindVolunteerActionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindVolunteerActionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindVolunteerActionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindVolunteerActionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindVolunteerActionQuery, FindVolunteerActionQueryVariables>) {
        return ApolloReactHooks.useQuery<FindVolunteerActionQuery, FindVolunteerActionQueryVariables>(FindVolunteerActionDocument, baseOptions);
      }
export function useFindVolunteerActionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindVolunteerActionQuery, FindVolunteerActionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindVolunteerActionQuery, FindVolunteerActionQueryVariables>(FindVolunteerActionDocument, baseOptions);
        }
export type FindVolunteerActionQueryHookResult = ReturnType<typeof useFindVolunteerActionQuery>;
export type FindVolunteerActionLazyQueryHookResult = ReturnType<typeof useFindVolunteerActionLazyQuery>;
export type FindVolunteerActionQueryResult = ApolloReactCommon.QueryResult<FindVolunteerActionQuery, FindVolunteerActionQueryVariables>;