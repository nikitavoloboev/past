/*
Copyright (c) 2023-2024 Microbus LLC and various contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Code generated by Microbus. DO NOT EDIT.

/*
Package control implements the control.core microservice.

This microservice is created for the sake of generating the client API for the :888 control subscriptions.
The microservice itself does nothing and should not be included in applications.
*/
package control

import (
	"context"
	"net/http"
	"time"

	"github.com/microbus-io/fabric/errors"
	"github.com/microbus-io/fabric/service"

	"github.com/microbus-io/fabric/coreservices/control/intermediate"
	"github.com/microbus-io/fabric/coreservices/control/controlapi"
)

var (
	_ context.Context
	_ *http.Request
	_ time.Duration
	_ service.Service
	_ *errors.TracedError
	_ *controlapi.Client
)

// Hostname is the default hostname of the microservice: control.core.
const Hostname = "control.core"

// NewService creates a new control.core microservice.
func NewService() *Service {
	s := &Service{}
	s.Intermediate = intermediate.NewService(s, Version)
	return s
}

// Mock is a mockable version of the control.core microservice, allowing functions, event sinks and web handlers to be mocked.
type Mock = intermediate.Mock

// New creates a new mockable version of the microservice.
func NewMock() *Mock {
	return intermediate.NewMock()
}

/*
Init enables a single-statement pattern for initializing the microservice.

	svc.Init(func(svc Service) {
		svc.SetGreeting("Hello")
	})
*/
func (svc *Service) Init(initializer func(svc *Service)) *Service {
	initializer(svc)
	return svc
}
