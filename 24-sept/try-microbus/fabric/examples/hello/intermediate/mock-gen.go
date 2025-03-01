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

package intermediate

import (
	"context"
	"net/http"
	"time"

	"github.com/microbus-io/fabric/connector"
	"github.com/microbus-io/fabric/errors"

	"github.com/microbus-io/fabric/examples/hello/helloapi"
)

var (
	_ context.Context
	_ *http.Request
	_ time.Duration
	_ *errors.TracedError
	_ helloapi.Client
)

// Mock is a mockable version of the hello.example microservice, allowing functions, event sinks and web handlers to be mocked.
type Mock struct {
	*Intermediate
	mockHello func(w http.ResponseWriter, r *http.Request) (err error)
	mockEcho func(w http.ResponseWriter, r *http.Request) (err error)
	mockPing func(w http.ResponseWriter, r *http.Request) (err error)
	mockCalculator func(w http.ResponseWriter, r *http.Request) (err error)
	mockBusPNG func(w http.ResponseWriter, r *http.Request) (err error)
	mockLocalization func(w http.ResponseWriter, r *http.Request) (err error)
	mockRoot func(w http.ResponseWriter, r *http.Request) (err error)
}

// NewMock creates a new mockable version of the microservice.
func NewMock() *Mock {
	m := &Mock{}
	m.Intermediate = NewService(m, 7357) // Stands for TEST
	return m
}

// OnStartup makes sure that the mock is not executed in a non-dev environment.
func (svc *Mock) OnStartup(ctx context.Context) (err error) {
	if svc.Deployment() != connector.LOCAL && svc.Deployment() != connector.TESTING {
		return errors.Newf("mocking disallowed in '%s' deployment", svc.Deployment())
	}
	return nil
}

// OnShutdown is a no op.
func (svc *Mock) OnShutdown(ctx context.Context) (err error) {
	return nil
}

// MockHello sets up a mock handler for the Hello endpoint.
func (svc *Mock) MockHello(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockHello = handler
	return svc
}

// Hello runs the mock handler set by MockHello.
func (svc *Mock) Hello(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockHello == nil {
		return errors.New("mocked endpoint 'Hello' not implemented")
	}
	err = svc.mockHello(w, r)
	return errors.Trace(err)
}

// MockEcho sets up a mock handler for the Echo endpoint.
func (svc *Mock) MockEcho(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockEcho = handler
	return svc
}

// Echo runs the mock handler set by MockEcho.
func (svc *Mock) Echo(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockEcho == nil {
		return errors.New("mocked endpoint 'Echo' not implemented")
	}
	err = svc.mockEcho(w, r)
	return errors.Trace(err)
}

// MockPing sets up a mock handler for the Ping endpoint.
func (svc *Mock) MockPing(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockPing = handler
	return svc
}

// Ping runs the mock handler set by MockPing.
func (svc *Mock) Ping(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockPing == nil {
		return errors.New("mocked endpoint 'Ping' not implemented")
	}
	err = svc.mockPing(w, r)
	return errors.Trace(err)
}

// MockCalculator sets up a mock handler for the Calculator endpoint.
func (svc *Mock) MockCalculator(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockCalculator = handler
	return svc
}

// Calculator runs the mock handler set by MockCalculator.
func (svc *Mock) Calculator(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockCalculator == nil {
		return errors.New("mocked endpoint 'Calculator' not implemented")
	}
	err = svc.mockCalculator(w, r)
	return errors.Trace(err)
}

// MockBusPNG sets up a mock handler for the BusPNG endpoint.
func (svc *Mock) MockBusPNG(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockBusPNG = handler
	return svc
}

// BusPNG runs the mock handler set by MockBusPNG.
func (svc *Mock) BusPNG(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockBusPNG == nil {
		return errors.New("mocked endpoint 'BusPNG' not implemented")
	}
	err = svc.mockBusPNG(w, r)
	return errors.Trace(err)
}

// MockLocalization sets up a mock handler for the Localization endpoint.
func (svc *Mock) MockLocalization(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockLocalization = handler
	return svc
}

// Localization runs the mock handler set by MockLocalization.
func (svc *Mock) Localization(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockLocalization == nil {
		return errors.New("mocked endpoint 'Localization' not implemented")
	}
	err = svc.mockLocalization(w, r)
	return errors.Trace(err)
}

// MockRoot sets up a mock handler for the Root endpoint.
func (svc *Mock) MockRoot(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockRoot = handler
	return svc
}

// Root runs the mock handler set by MockRoot.
func (svc *Mock) Root(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockRoot == nil {
		return errors.New("mocked endpoint 'Root' not implemented")
	}
	err = svc.mockRoot(w, r)
	return errors.Trace(err)
}

// TickTock is a no op.
func (svc *Mock) TickTock(ctx context.Context) (err error) {
	return nil
}
